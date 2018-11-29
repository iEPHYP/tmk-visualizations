import * as moment from 'moment';
moment.locale('ru');

export type DateMode = 'single' | 'period';

export class CalendarState {
    static readonly DEFAULTS: Partial<CalendarState> = {
        activeMode: 'single',
        selectedStartDate: moment(),
        selectedEndDate: moment(),
        currentStartDate: moment(),
        currentEndDate: moment()
    };

    activeMode: DateMode;
    selectedStartDate: moment.Moment;
    selectedEndDate: moment.Moment;
    currentStartDate: moment.Moment;
    currentEndDate: moment.Moment;

    constructor(...calendarStates: Partial<CalendarState>[]) {
        Object.assign(this, CalendarState.DEFAULTS, ...calendarStates);
        this.selectedStartDate = moment(this.selectedStartDate);
        this.selectedEndDate = moment(this.selectedEndDate);
        this.currentStartDate = moment(this.currentStartDate);
        this.currentEndDate = moment(this.currentEndDate);
    }
}
