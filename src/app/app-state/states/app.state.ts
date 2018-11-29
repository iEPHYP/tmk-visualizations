import { PageState } from './page.state';
import { CalendarState } from './calendar.state';
import { DepartmentState } from './department.state';

export class AppState {

    static DEFAULTS: Partial<AppState> = {
        calendarState: new CalendarState(),
        departmentState: new DepartmentState(),
        pageState: new PageState()
    };

    calendarState: CalendarState;
    departmentState: DepartmentState;
    pageState: PageState;
    router: string;


    constructor(...states: Partial<AppState>[]) {
        Object.assign(this, AppState.DEFAULTS, ...states);

        if (this.calendarState && !(this.calendarState instanceof CalendarState)) {
            this.calendarState = new CalendarState(this.calendarState);
        }
        if (this.departmentState && !(this.departmentState instanceof DepartmentState)) {
            this.departmentState = new DepartmentState(this.departmentState);
        }
        if (this.pageState && !(this.pageState instanceof PageState)) {
            this.pageState = new PageState(this.pageState);
        }
    }
}

let stateFromStorage: AppState;

const stateFromStorageStr = sessionStorage.getItem('tmk.app-state');
if (stateFromStorageStr) {
    try {
        stateFromStorage = JSON.parse(stateFromStorageStr);
    } catch (ex) {
        stateFromStorage = new AppState();
    } finally {
        stateFromStorage = new AppState(stateFromStorage);
    }
} else {
    stateFromStorage = new AppState();
}

export const INITIAL_APP_STATE = stateFromStorage;
