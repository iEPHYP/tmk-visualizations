import { Component, OnInit, OnDestroy, EventEmitter, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { LoaderService } from '../../../../shared-components/services/loader.service';
import { ChartVM } from './equipment-charts.model';
import { Observable } from 'rxjs/Observable';
import { PPRPageComponent } from '../ppr-page.component';
import { CalendarState } from '../../../../app-state/states/calendar.state';
import { select } from '@angular-redux/store';
import { PprPageService } from '../ppr-page.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tmk-equipment-charts',
  templateUrl: './equipment-charts.component.html',
  styleUrls: ['./equipment-charts.component.scss']
})
export class EquipmentChartsComponent implements OnInit, OnDestroy {

    departmentId = 0;
    facilityId = 0;
    equipmentId = 0;
    dateFrom = moment(new Date());
    dateTo = moment(new Date());

    private unsubscribe = new Subject<void>();

    charts: ChartVM[] = [];
    loaderName = LoaderService.CHARTS_LOADER;

    @select(['calendarState']) public readonly calendarState$: Observable<CalendarState>;

    constructor(
        private route: ActivatedRoute,
        private loaderService: LoaderService,
        private pprService: PprPageService,
        @Optional() private parent: PPRPageComponent
    ) {
    }

    ngOnInit() {
        Observable.combineLatest(
            this.route.params,
            this.calendarState$)
        .takeUntil(this.unsubscribe)
        .subscribe(data => {
            this.dateFrom = data[1].currentStartDate;
            this.dateTo = data[1].currentEndDate;

            this.facilityId = +this.route.parent.params['_value']['facilityId'];
            this.equipmentId = +data[0].equipmentId;

            this.getData();
        });
    }

    private getData() {
        const loader = this.loaderService.setLoading(LoaderService.CHARTS_LOADER);
        const dateFrom = this.dateFrom.format('YYYY-MM-DD HH:mm:ss');
        const dateTo = this.dateTo.format('YYYY-MM-DD HH:mm:ss');

        this.pprService.getChartDatas(this.facilityId, this.equipmentId, dateFrom, dateTo)
            .takeUntil(this.unsubscribe)
            .subscribe(charts => {
                this.charts = charts;
                loader.loaded();
            });
    }

    public selectChart(item: ChartVM) {
        this.parent.selectIndicator(+item.id, this.equipmentId);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
