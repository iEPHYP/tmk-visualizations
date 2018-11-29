import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../../constants";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Indicator } from "./equipment-schema/equipment-schema-template/indicator-label/indicator-label.models";
import {
    ChartVM,
    TableAndChartVM
} from "./equipment-charts/equipment-charts.model";
import { getMocks } from "./ppr-page.charts.mocks";

@Injectable()
export class PprPageService {
    constructor(
        @Inject(API_URL) private apiUrl: string,
        private http: HttpClient
    ) {}

    getIndicators(
        equipmentId: number,
        facilityId: number,
        date: string
    ): Observable<Indicator[]> {
        const subject = new Subject<Indicator[]>();

        const facility = equipmentId === 0;
        const equipment = equipmentId ? equipmentId : facilityId;

        this.http
            .get(
                `${
                    this.apiUrl
                }/api/Mnemoscheme/GetIndicatorValues?equipmentId=${equipment}&facility=${facility}&dateTo=${date}`
            )
            .subscribe(response => {
                subject.next(<Indicator[]>response);
            });

        return subject.asObservable();
    }

    getChartDatas(
        facilityId: number,
        equipmentId: number,
        dateFrom: string,
        dateTo: string
    ): Observable<ChartVM[]> {
        const subject = new Subject<ChartVM[]>();

        return this.getTableAndChartData(
            facilityId,
            equipmentId,
            dateFrom,
            dateTo
        ).map(data => data.chartData);
    }

    getTableAndChartData(
        facilityId: number,
        equipmentId: number,
        dateFrom: string,
        dateTo: string,
        indicatorId: number = null,
        periodType: string = null
    ): Observable<TableAndChartVM> {
        const subject = new Subject<TableAndChartVM>();

        setTimeout(() => {
            const data = <TableAndChartVM>getMocks(facilityId, equipmentId);
            subject.next(new TableAndChartVM(data));
        }, 500);

        return subject.asObservable();
    }
}
