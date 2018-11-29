import {
    Options,
    Text,
    Axis,
    Axises,
    Ticks,
    Tooltip
} from "../../chart.models";

export class NewOptions extends Options {
    public axises: NewAxises = new NewAxises();
    public tooltip: NewTooltip = new NewTooltip();
    public measurementUnitText: Text = new Text({
        size: 14,
        font: "Tahoma"
    });

    constructor(...inits: Partial<NewOptions>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class TopAxis extends Axis {
    public topMargin = 50;
    public height = 50;
    public tickText = new Text({
        color: "#E9E9E9",
        font: "Tahoma",
        size: 14
    });
    public mainTickText = new Text({
        color: "#FFDE55",
        font: "Tahoma",
        size: 14
    });

    constructor(...inits: Partial<TopAxis>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class BottomAxis extends Axis {
    public height = 50;
    public padding = 5;

    constructor(...inits: Partial<BottomAxis>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class NewAxises extends Axises {
    public x: BottomAxis = new BottomAxis();
    public xTop: TopAxis = new TopAxis();

    constructor(...inits: Partial<NewAxises>[]) {
        super(...inits);
        this.y = new Axis({
            arrow: { has: false, length: 0 },
            color: "#333748",
            ticks: new Ticks({
                length: 10,
                quantity: 9,
                color: "#333748",
                text: {
                    color: "#767B91",
                    size: 12,
                    font: "Tahoma"
                }
            })
        });
        Object.assign(this, ...inits);
    }
}

export class NewTooltip extends Tooltip {
    public dateBox: DateBox = new DateBox();
    public margin = 9;
    public textPadding = 4;
    public deviationPadding = 16.5;
    public fontSize = 14;
    public height = 24;

    constructor(...inits: Partial<NewTooltip>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class DateBox {
    public height = 50;
    public text = new Text({
        size: 14,
        font: "Tahoma"
    });
    public padding = 7;

    constructor(...inits: Partial<DateBox>[]) {
        Object.assign(this, ...inits);
    }
}
