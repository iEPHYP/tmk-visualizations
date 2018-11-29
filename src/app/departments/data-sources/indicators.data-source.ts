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
import { Indicator } from '../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';

@Injectable()
export class IndicatorsDataSource extends DataSource<IFilterListVM> {

    private subject: BehaviorSubject<IFilterListVM[]>;
    public data: IFilterListVM<Indicator>[] = [];

    public equipmentId: number;
    public facilityId: number;
    public date: string;
    public forFacility: boolean;

    private map = equipmentRouteMap;

    constructor(
        private http: HttpClient,
        @Inject(API_URL) private apiUrl: string,
    ) {
        super();
        this.subject = new BehaviorSubject<IFilterListVM<Indicator>[]>([]);
    }

    public init(equipmentId: number, facilityId: number, date: string, forFacility = false): Subject<IFilterListVM<Indicator>[]> {
        this.equipmentId = equipmentId;
        this.facilityId = facilityId;
        this.date = date;
        this.forFacility = forFacility;
        this.loadData();
        return this.subject;
    }

    private loadData() {
        const equipment = this.equipmentId ? this.equipmentId : this.facilityId;

        this.http.get(`${this.apiUrl}/api/Mnemoscheme/GetIndicatorValues?equipmentId=${equipment}&facility=${this.forFacility}&dateTo=${this.date}`)
            .subscribe(response => {
                const items = <Indicator[]>response;
                this.data = [];
                items.forEach(item => {
                    this.data.push({
                        data: item
                    });
                });
                this.subject.next(this.data);
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<IFilterListVM<Indicator>[]> {
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}
