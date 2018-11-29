import { Action, AnyAction } from 'redux';
import * as moment from 'moment';
moment.locale('ru');
import { DepartmentActions, SetDepartmentAction, SetDepartmentByIdAction, SetDepartmentByNumberAction } from '../actions/department.actions';
import { DepartmentState } from '../states/department.state';
import { INITIAL_APP_STATE } from '../states/app.state';

interface IDepartment {
    department: number;
    departmentId: number;
    title: string;
}

export const DEPARTMENTS = [
    {
        department: 1,
        departmentId: 101,
        title: 'Цех №1'
    },
    {
        department: 2,
        departmentId: 102,
        title: 'Цех №2'
    },
    {
        department: 3,
        departmentId: 103,
        title: 'Цех №3'
    },
    {
        department: 7,
        departmentId: 107,
        title: 'Цех №7'
    },
    {
        department: 9,
        departmentId: 109,
        title: 'Цех №9'
    },
    {
        department: 12,
        departmentId: 112,
        title: 'Цех №12'
    },
    {
        department: 14,
        departmentId: 114,
        title: 'Цех №14'
    }
];

export function departmentReducer(state: DepartmentState = INITIAL_APP_STATE.departmentState, action: AnyAction) {
    switch (action.type) {
        case DepartmentActions.SET_ACTIVE_DEPARTMENT:
            let department: IDepartment;
            if ('departmentId' in action) {
                const setActiveDepartmentAction = action as SetDepartmentByIdAction;
                department = DEPARTMENTS.find(d => d.departmentId === setActiveDepartmentAction.departmentId);
            } else {
                const setActiveDepartmentAction = action as SetDepartmentByNumberAction;
                department = DEPARTMENTS.find(d => d.department === setActiveDepartmentAction.departmentNumber);
            }
            if (department) {
                return new DepartmentState(state, {
                    activeDepartment: department.department,
                    departmentId: department.departmentId,
                    departmentTitle: department.title
                });
            } else {
                return state;
            }
        default: return state;
    }
}
