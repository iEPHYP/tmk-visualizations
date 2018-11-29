import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable, Optional, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Facility } from './facilities.data-source';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { IFilterListVM } from '../../shared-components/filter-list/filter-list.models';
import { API_URL } from '../../constants';

export interface Equipment {
    id?: number;
    title?: string;
}

@Injectable()
export class EquipmentsDataSource extends DataSource<IFilterListVM> {

    private subject: BehaviorSubject<IFilterListVM[]>;
    public data: IFilterListVM<Equipment>[] = [];

    constructor(
        private http: HttpClient,
        @Inject(API_URL) private apiUrl: string,
    ) {
        super();
        this.subject = new BehaviorSubject<IFilterListVM<Equipment>[]>([]);
    }

    public init(equipments: Equipment[]) {
        this.data = [];
        equipments.forEach(equipment => {
            this.data.push({
                data: equipment
            });
        });
        this.subject.next(this.data);
    }

    connect(collectionViewer: CollectionViewer): Observable<IFilterListVM<Equipment>[]> {
        return this.subject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
    }

}
