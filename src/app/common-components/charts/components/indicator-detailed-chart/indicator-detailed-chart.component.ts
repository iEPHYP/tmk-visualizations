import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { IndicatorDetailedLinechart } from './indicator-detailed-chart.linechart';
import { IndicatorPreviewChartComponent } from '../indicator-preview-chart/indicator-preview-chart.component';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { AppState } from '../../../../app-state/states/app.state';
import { CalendarState } from '../../../../app-state/states/calendar.state';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tmk-indicator-detailed-chart',
    templateUrl: './indicator-detailed-chart.component.html',
    styleUrls: ['./indicator-detailed-chart.component.scss']
})

export class IndicatorDetailedChartComponent extends IndicatorPreviewChartComponent implements OnInit {

    @Output() onClose = new EventEmitter();
    @Output() onDateBoxClicked = new EventEmitter<number>();

    @select(['calendarState']) public readonly calendarState$: Observable<CalendarState>;
    public dateFrom: moment.Moment;
    public dateTo: moment.Moment;

    constructor(protected element: ElementRef, private ngRedux: NgRedux<AppState>) {
        super(element);
    }

    ngOnInit() {
        this.calendarState$.subscribe(data => {
            this.dateFrom = data.currentStartDate.clone();
            this.dateTo = data.currentEndDate.clone();
        });
    }

    protected initLinechart() {
        this.linechart = new IndicatorDetailedLinechart(
            $(this.element.nativeElement).find('.chart-body'),
            _(this.data).cloneDeep(),
            this.onDateBoxClicked,
            this.periodType,
            this.measurement
        );
    }

    public closeChart() {
        this.onClose.next();
    }

}
