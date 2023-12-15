import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable, Optional, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Equipment } from './equipments.data-source';
import { IFilterListVM } from '../../shared-components/filter-list/filter-list.models';
import { equipmentRouteMap } from '../components/ppr-page/equipment-schema/equipment-schema.routes';
import { API_URL } from '../../constants';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Facility } from '../components/abstract-department-page/department/facility-frame/facility-frame.models';

export interface Facility {
    id?: number;
    title?: string;
    mainRoute?: boolean;
    equipments: Equipment[];
}

@Injectable()
export class FacilitiesDataSource extends DataSource<IFilterListVM> {

    private subject: BehaviorSubject<IFilterListVM[]>;
    public data: IFilterListVM<Facility>[] = [];
    public departmentId: number;
    private map = equipmentRouteMap;

    constructor(
        private http: HttpClient,
        @Inject(API_URL) private apiUrl: string,
    ) {
        super();
        this.subject = new BehaviorSubject<IFilterListVM<Facility>[]>([]);
    }

    public init(departmentId: number): Subject<IFilterListVM<Facility>[]> {
        this.departmentId = departmentId;
        this.loadData();
        return this.subject;
    }

    private loadData() {
        const facilityConvertation = map<Facility[], Facility[]>(r => r.map(f => new Facility(f)));

        const subject = new Subject();

        subject.asObservable()
            .pipe(facilityConvertation)
            .subscribe(response => {
                const items: Facility[] = response;
                this.data = [];
                items.forEach(item => {
                    const route = this.map.get(item.id);
                    if (route && route.forFacility) {
                        item.mainRoute = true;
                    }
                    this.data.push({
                        data: item
                    });
                });
                this.subject.next(this.data);
            });

        subject.next(
            [
                {
                    id: 105,
                    title: 'Silo towers',
                    equipments: [
                        {
                            id: 105005,
                            title: 'Silo tower #5'
                        },
                        {
                            id: 105008,
                            title: 'Silo tower #8'
                        }
                    ]
                }, {
                    id: 106,
                    title: 'Carnalyte Chlorinator',
                    equipments: [
                        {
                            id: 106001,
                            title: 'Chlorinator #1'
                        },
                        {
                            id: 106003,
                            title: 'Chlorinator #3'
                        }
                    ]
                }, {
                    id: 109,
                    title: 'Electrolyzers',
                    equipments: [
                        {
                            id: 109001,
                            title: 'Electrolyzer # 1'
                        },
                        {
                            id: 109002,
                            title: 'Electrolyzer # 2'
                        }
                    ]
                }
            ]
        );
    }

    connect(collectionViewer: CollectionViewer): Observable<IFilterListVM<Facility>[]> {
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}
