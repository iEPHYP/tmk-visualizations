export class DepartmentState {

    static readonly DEFAULTS: Partial<DepartmentState> = {
        activeDepartment: null,
        departmentId: null,
        departmentTitle: null
    };

    activeDepartment: number;
    departmentId: number;
    departmentTitle: string;

    constructor(...departmentStates: Partial<DepartmentState>[]) {
        Object.assign(this, DepartmentState.DEFAULTS, ...departmentStates);
    }
}