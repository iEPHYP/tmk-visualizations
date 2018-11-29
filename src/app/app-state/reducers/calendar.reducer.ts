import { Action, AnyAction } from 'redux';
import { CalendarActions, SetModeAction, SetPeriodAction, SetDateAction } from '../actions/calendar.actions';
import * as moment from 'moment';
import { CalendarState } from '../states/calendar.state';
import { INITIAL_APP_STATE } from '../states/app.state';
import { Injectable } from '@angular/core';

export class CalendarReducer {
    private setMode(state: CalendarState = INITIAL_APP_STATE.calendarState, action: SetModeAction) {
        const setModeAction = action as SetModeAction;
        if (setModeAction.mode === 'period') {
            if (state.selectedEndDate.isSame(state.selectedStartDate, 'minutes') && state.selectedStartDate.isSame(moment(), 'minutes')) {
                return new CalendarState(state, {
                    activeMode: 'single',
                    currentStartDate: state.selectedStartDate.clone(),
                    currentEndDate: state.selectedEndDate.clone()
                });
            } else {
                return new CalendarState(state, {
                    activeMode: 'period',
                    currentStartDate: state.selectedStartDate.clone(),
                    currentEndDate: state.selectedEndDate.clone()
                });
            }
        } else {
            return new CalendarState(state, {
                activeMode: 'single',
                currentStartDate: state.selectedStartDate.clone(),
                currentEndDate: state.selectedStartDate.clone()
            });
        }
    }

    private setSelectedPeriod(state: CalendarState = INITIAL_APP_STATE.calendarState, action: AnyAction) {
        const setSelectedPeriodAction = action as SetPeriodAction;
        console.log(setSelectedPeriodAction.period);
        let newState = new CalendarState(state, {
            selectedStartDate: setSelectedPeriodAction.period.start.clone(),
            selectedEndDate: setSelectedPeriodAction.period.end.clone(),
        });
        newState = this.setMode(newState, { type: CalendarActions.SET_MODE, mode: 'period' });
        return newState;
    }

    private today(state: CalendarState = INITIAL_APP_STATE.calendarState, action: AnyAction) {
        const date = moment();
        return new CalendarState(state, {
            activeMode: 'single',
            currentStartDate: date.clone(),
            currentEndDate: date.clone()
        });
    }

    private date(state: CalendarState = INITIAL_APP_STATE.calendarState, action: AnyAction) {
        const setCurrentDateAction = action as SetDateAction;
        let newState = this.setMode(state, { type: CalendarActions.SET_MODE, mode: 'single' });
        return newState = new CalendarState(newState, {
            currentStartDate: setCurrentDateAction.date.clone(),
            currentEndDate: setCurrentDateAction.date.clone(),
        });
    }


    reducer() {
        const reducer = (state: CalendarState = INITIAL_APP_STATE.calendarState, action: AnyAction) => {
            switch (action.type) {
                case CalendarActions.SET_MODE:
                    return this.setMode(state, action as SetModeAction);
                case CalendarActions.SET_SELECTED_PERIOD:
                    return this.setSelectedPeriod(state, action);
                case CalendarActions.TODAY:
                    return this.today(state, action);
                case CalendarActions.DATE:
                    return this.date(state, action);

                default: return state;
            }
        };
        return reducer.bind(this);
    }
}
