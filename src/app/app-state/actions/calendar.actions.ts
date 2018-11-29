import { Action } from 'redux';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DateMode } from '../states/calendar.state';

export interface SetModeAction extends Action {
    mode: DateMode;
}

export interface DatePeriod {
    start: moment.Moment;
    end: moment.Moment;
}

export interface SetPeriodAction extends Action {
    period: DatePeriod;
}

export interface SetDateAction extends Action {
    date: moment.Moment;
}

@Injectable()
export class CalendarActions {
    static readonly SET_MODE = 'SET_MODE';
    static readonly SET_SELECTED_PERIOD = 'SET_SELECTED_PERIOD';
    static readonly TODAY = 'TODAY';
    static readonly DATE = 'DATE';

    setMode(mode: DateMode): SetModeAction {
        return { type: CalendarActions.SET_MODE, mode };
    }

    setSelectedPeriod(period: DatePeriod): SetPeriodAction {
        return { type: CalendarActions.SET_SELECTED_PERIOD, period };
    }

    setToday(): Action {
        return { type: CalendarActions.TODAY };
    }

    setDate(date: moment.Moment): SetDateAction {
        return { type: CalendarActions.DATE, date };
    }
}
