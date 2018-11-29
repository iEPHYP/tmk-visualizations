import { Observable } from "rxjs/Observable";
import { Injectable, Inject } from "@angular/core";
import { IFilterListVM } from "../../../shared-components/filter-list/filter-list.models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../../constants";
import { DataSource, CollectionViewer } from "@angular/cdk/collections";

export interface Status {
    id?: number;
    title?: number;
    color?: string;
}

@Injectable()
export class StatusesDataSource extends DataSource<IFilterListVM> {
    private subject: BehaviorSubject<IFilterListVM[]>;
    public data: IFilterListVM<Status>[] = [];

    constructor(
        private http: HttpClient,
        @Inject(API_URL) private apiUrl: string
    ) {
        super();
        this.subject = new BehaviorSubject<IFilterListVM<Status>[]>([]);
    }

    public init() {
        this.loadData();
    }

    private loadData() {
        this.http
            .get(`${this.apiUrl}/api/ref/GetAll/Statuses`)
            .subscribe(response => {
                const items: Status[] = response as Status[];
                this.data = [];
                items.forEach(item => {
                    this.data.push({
                        data: item
                    });
                });
                this.subject.next(this.data);
            });
    }

    connect(
        collectionViewer: CollectionViewer
    ): Observable<IFilterListVM<Status>[]> {
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {}
}
