import { Action } from 'redux';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

export interface SetDepartmentByNumberModel {
    departmentNumber: number;
}

export interface SetDepartmentByIdModel {
    departmentId: number;
}

export interface SetDepartmentByNumberAction extends Action {
    departmentNumber: number;
}

export interface SetDepartmentByIdAction extends Action {
    departmentId: number;
}

export type SetDepartmentModel = SetDepartmentByIdModel | SetDepartmentByNumberModel;
export type SetDepartmentAction = SetDepartmentByNumberAction | SetDepartmentByIdAction;

@Injectable()
export class DepartmentActions {

    public static readonly SET_ACTIVE_DEPARTMENT = 'SET_ACTIVE_DEPARTMENT';

    setActiveDepartment(model: SetDepartmentModel): SetDepartmentAction {
        return { type: DepartmentActions.SET_ACTIVE_DEPARTMENT, ...model };
    }
}
