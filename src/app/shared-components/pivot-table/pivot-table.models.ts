export type QuaterValue = string | number | null;
export interface IQuatersConfig {
    width: number;
    year: number;
    date: string;
    shown?: boolean;
    left?: number;
    values: [QuaterValue, QuaterValue, QuaterValue, QuaterValue];
}

export class ColumnConfig<TMetaData = any, TID = any> {

    static readonly DEFAULTS: Partial<ColumnConfig> = {
        shown: true,
        active: false
    };


    caption: string;
    value?: QuaterValue;
    active?: boolean;
    shown?: boolean;
    width: number;
    left?: number;
    id?: TID;
    startDay: number;
    endDay: number;
    metadata?: TMetaData;

    constructor(...configs: Partial<ColumnConfig>[]) {
        Object.assign(this, ColumnConfig.DEFAULTS, ...configs);
    }
}

export class PivotTableConfiguration {

    static readonly DEFAULTS: Partial<PivotTableConfiguration> = {
        title: 'Pivot Table Default Title',
        width: 100,
        quaters: null,
        columns: [],
        staticColumns: [],
        selectedColumn: null
    };

    title: string;
    width: number;
    quaters?: IQuatersConfig;
    columns?: ColumnConfig[];
    staticColumns?: ColumnConfig[];
    selectedColumn?: ColumnConfig;
    currentDate: Date;


    constructor(...configs: Partial<PivotTableConfiguration>[]) {
        Object.assign(this, PivotTableConfiguration.DEFAULTS, ...configs);
        this.columns = this.columns.map(c => new ColumnConfig(c));
    }

}

export interface IPivotTableData {
    main: Array<{ id: number, title: string }>;
    quaters?: QuaterValue[][];
    year?: QuaterValue[];
    columns?: Array<string | number | null>[];
    staticColumns?: Array<string | number | null>[];
}

export interface ISelectedColumnModel {
    columns: string[];
    data: Array<string | number | null>;
}

export interface IExpandedItemDataModel {
    value: number;
    rowId: number;
    status: number;
}

export interface IExpandedItem {
    headers: IExpandedItemHeader[];
    caption: string;
    data: IExpandedItemDataModel[][];
    className: string;
    id?: number;
}

export interface IExpandedItemHeader {
    caption: string;
    value: number | string;
    aggregationType: string;
}
