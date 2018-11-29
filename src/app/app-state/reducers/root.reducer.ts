import { Action, combineReducers } from 'redux';
import { CalendarReducer } from './calendar.reducer';
import { departmentReducer } from './department.reducer';
import { routerReducer } from '@angular-redux/router';
import { pageReducer } from './page.reducer';
import { AppState, INITIAL_APP_STATE } from '../states/app.state';

const calendarReducer = new CalendarReducer();

const reducers = combineReducers<AppState>({
    calendarState: calendarReducer.reducer(),
    departmentState: departmentReducer,
    router: routerReducer,
    pageState: pageReducer
});

export function rootReducer(state: AppState = { ...INITIAL_APP_STATE }, action: Action) {
    const newState = reducers(state, action);
    sessionStorage.setItem('tmk.app-state', JSON.stringify(newState));
    return newState;
}
