import { Component, OnInit, Optional, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CalendarState } from '../../../../app-state/states/calendar.state';
import { select } from '@angular-redux/store';
import { ChartVM } from '../equipment-charts/equipment-charts.model';
import { LoaderService } from '../../../../shared-components/services/loader.service';
import * as moment from 'moment';
import { PprPageService } from '../ppr-page.service';
import { PPRPageComponent } from '../ppr-page.component';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'tmk-equipment-chart',
    templateUrl: './equipment-chart.component.html',
    styleUrls: ['./equipment-chart.component.scss']
})
export class EquipmentChartComponent implements OnInit, OnDestroy {

    dateFrom = moment(new Date());
    dateTo = moment(new Date());
    departmentId = 0; // Цех
    facilityId = 0;   // Установка
    equipmentId = 0;  // Оборудование
    indicatorId = 0;  // Тех параметр

    chart: ChartVM = null;
    loaderName = LoaderService.CHARTS_LOADER;

    private unsubscribe = new Subject<void>();

    @select(['calendarState']) public readonly calendarState$: Observable<CalendarState>;

    constructor(
        private route: ActivatedRoute,
        private loaderService: LoaderService,
        private pprService: PprPageService,
        private element: ElementRef,
        @Optional() private parent: PPRPageComponent
    ) { }

    ngOnInit() {
        Observable.combineLatest(
            this.route.params,
            this.calendarState$
        )
            .takeUntil(this.unsubscribe)
            .subscribe(data => {
                this.dateFrom = data[1].currentStartDate.clone();
                this.dateTo = data[1].currentEndDate.clone();

                this.facilityId = +this.route.parent.params['_value']['facilityId'];
                this.equipmentId = +data[0].equipmentId;
                this.indicatorId = +data[0].indicatorId;

                this.getData();
            });

    }

    private getData() {
        const loader = this.loaderService.setLoading(LoaderService.CHARTS_LOADER);
        const dateFrom = this.dateFrom.format('YYYY-MM-DD HH:mm');
        const dateTo = this.dateTo.format('YYYY-MM-DD HH:mm');

        return this.pprService.getTableAndChartData(this.facilityId, this.equipmentId, dateFrom, dateTo, this.indicatorId)
            .subscribe(data => {
                if (data.chartData.length > 0) {
                    this.chart = data.chartData[0];
                    this.normalizeTable();
                }

                loader.loaded();
                return this.chart;
            });
    }

    public tableData: {
        periodType: string;
        header: Date[];
        items: {
            title: string;
            hasTwoValue: boolean;
            values: number[] | { max: number; min: number; }[];
        }[];
    };

    public normalizeTable() {
        this.tableData = {
            periodType: this.chart.periodType,
            header: [],
            items: [
                { title: 'Норма', hasTwoValue: true, values: [] },
                { title: 'Отклонение', hasTwoValue: true, values: [] }
            ]
        };

        const minNormItems = this.chart.items.find(i => i.name === 'min-norms');
        const maxNormItems = this.chart.items.find(i => i.name === 'max-norms');
        const minNorm = minNormItems && minNormItems.values.length > 0 ? minNormItems.values[0].value : 0;
        const maxNorm = maxNormItems && maxNormItems.values.length > 0 ? maxNormItems.values[0].value : 0;

        const singleItems = this.chart.items.find(i => i.name === 'single');
        const maxItems = this.chart.items.find(i => i.name === 'max');
        const minItems = this.chart.items.find(i => i.name === 'min');

        if (singleItems) {
            this.tableData.items.unshift({ title: 'Факт', hasTwoValue: false, values: [] });

            for (let i = 0; i < singleItems.values.length; i++) {
                const val = singleItems.values[i];

                this.tableData.header.push(new Date(val.date.toString()));
                (<number[]>(this.tableData.items[0].values)).push(val.value);
                (<any[]>(this.tableData.items[1].values)).push({ max: maxNorm, min: minNorm });
                (<any[]>(this.tableData.items[2].values)).push({ max: maxNorm - val.value, min: val.value - minNorm });
            }
        } else {
            this.tableData.items.unshift(...[
                { title: 'Максимум', hasTwoValue: false, values: [] },
                { title: 'Минимум', hasTwoValue: false, values: [] },
            ]);

            for (let i = 0; i < maxItems.values.length; i++) {
                const max = maxItems.values[i];
                const min = minItems.values[i];

                this.tableData.header.push(new Date(max.date.toString()));
                (<number[]>(this.tableData.items[0].values)).push(max.value);
                (<number[]>(this.tableData.items[1].values)).push(min.value);
                (<any[]>(this.tableData.items[2].values)).push({ max: maxNorm, min: minNorm });
                (<any[]>(this.tableData.items[3].values)).push({ max: max.value - maxNorm, min: min.value - minNorm });
            }
        }
    }

    public closeChart() {
        this.parent.closeIndicator();
    }

    scrollTable(index: number) {
        const $table = $(this.element.nativeElement).find('.chart-table');
        const $cols = $table.find('.col:nth-child(' + (index + 2) + ')');

        const left = $cols.position().left - $table.position().left + $table.scrollLeft();
        $table.find('.col').removeClass('active');
        $cols.addClass('active');
        $table.scrollLeft(left);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
