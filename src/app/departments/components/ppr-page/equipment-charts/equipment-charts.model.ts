import { Item } from '../../../../common-components/charts/chart.models';

export class ChartVM {
    id: number;
    title: string;
    isNormal: boolean;
    measurement?: string;
    periodType?: string;
    items: Item[] = [];

    constructor(data: ChartVM) {
        Object.assign(this, data);

        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = new Item(this.items[i]);
        }
    }
}

export class TableVM {
    indicatorID: string;
    indicatorTitle: string;
    mUnit: string;
    lastValue: number;
    maxValue: number;
    minValue: number;
    maxDiff: number;
    minDiff: number;
    normMax: number;
    normMin: number;
    periodValueTime: Date;

    constructor(data: TableVM) {
        Object.assign(this, data);

        this.periodValueTime = new Date(this.periodValueTime.toString());
    }
}

export class TableAndChartVM {
    chartData: ChartVM[];
    tableData: TableVM[];

    constructor(data: TableAndChartVM) {
        Object.assign(this, data);

        for (let i = 0; i < this.chartData.length; i++) {
            this.chartData[i] = new ChartVM(this.chartData[i]);
        }
    }
}
