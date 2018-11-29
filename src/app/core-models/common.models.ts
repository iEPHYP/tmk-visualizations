namespace Common {
    export interface IPaginatedResult<T> {
        currentPageNumber: number;
        elementsPerPage: number;
        lastPageNumber: number;
        list: T[];
    }

    export interface Item {
        id: number;
        title: string;
    }

    export interface DepartmentItem extends Item {
        description: string;
        shortTitle: string;
    }

    export interface ItemStr {
        id: string;
        title: string;
    }

    export interface ActiveItem extends Item {
        isActive: boolean;
    }

    export interface ResponseObj {
        id: number;
        isValid: boolean;
        errors: any[];
    }
}
