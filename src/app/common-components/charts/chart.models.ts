import * as d3 from 'd3';
import { CurveFactory } from 'd3';

export class Options {
    public ranges: Ranges = new Ranges();
    public metadata: Meta[];
    public width = 400;
    public height = 200;
    public background_color = 'black';
    public body_color = null;
    public legends: Legends = new Legends();
    public chartTitle: string;
    public tooltip: Tooltip = new Tooltip();
    public margin: Margin = new Margin({
        left: 40, top: 10, right: 20, bottom: 20
    });
    public axises: Axises = new Axises();
    public grid: Grid = new Grid();
    public precision = 2; // digits after dot
    public last_value = new LastValue();
    public currentTime: CurrentTime;
    public periodType: 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years' = 'days';
    public tooltipDateFormat = 'DD.MM.YYYY HH:mm';
    public labeledPointsConfig: LabeledPointsConfig = new LabeledPointsConfig();
    public horizontalLinesConfig: HorizontalLinesConfig = new HorizontalLinesConfig();
    public measurementLabel = '';

    constructor(...inits: Partial<Options>[]) {
        Object.assign(this, ...inits);
    }
}
// TODO: add feature to get common options for each item from options.metadata if options are not specified
export class Meta {
    public name: number | string;
    public title: string;
    public color: string;
    public stroke_width = 1.5;
    public interpolation: CurveFactory = d3.curveMonotoneX;
    public dashed = false;
    public dash_array = '2, 2';
    public circle: Circle = new Circle();
    public horizontalLine: HorizontalLine = null;
    public onLineCrosses: OnLineCross[];

    constructor(...inits: Partial<Meta>[]) {
        Object.assign(this, ...inits);
    }
}

export class Item extends Meta {
    public name: number | string;
    public values: Point[] = [];

    constructor(...inits: Partial<Item>[]) {
        super(...inits);
        Object.assign(this, ...inits);
        for (let i = 0; i < this.values.length; i++) {
            this.values[i] = new Point(this.values[i]);
        }
    }
}

export class Point {
    public date: Date;
    public value: number;
    public labeled: Labeled = null;

    constructor(...inits: Partial<Point>[]) {
        Object.assign(this, ...inits);
        if (typeof this.date === 'string') {
            this.date = new Date(this.date);
        }
    }
}

export class Labeled {
    public labels: string[] = [];
    public on: 'above' | 'below' = 'above';
    public color?: string; // this field used for internal requirements

    constructor(...inits: Partial<Labeled>[]) {
        Object.assign(this, ...inits);
    }
}

export class LabeledPointsConfig {

    public padding: { fromPoint: number; betweenLabels: number; innerLeft: number; innerTop: number; } = {
        fromPoint: 9,
        betweenLabels: 1,
        innerLeft: 2,
        innerTop: 0.5
    };
    public text: Text = new Text({
        color: 'black',
        size: 10
    });

    constructor(...inits: Partial<LabeledPointsConfig>[]) {
        Object.assign(this, ...inits);
    }
}

export class PointParented extends Point {
    public item: Item; // reference to Item
    public order: number;

    constructor(...inits: Partial<PointParented>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class Coordinate {
    public x: number;
    public y: number;

    constructor(...inits: Partial<Coordinate>[]) {
        Object.assign(this, ...inits);
    }
}

export class Axises {
    public x = new Axis();
    public y = new Axis();
    public yRight = new Axis();

    constructor(...inits: Partial<Axises>[]) {
        Object.assign(this, ...inits);
    }
}

export class Axis {
    public ticks: Ticks = new Ticks({
        length: 3,
        quantity: 5,
        text: new Text()
    });
    public color = 'white';
    public stroke_width = 1;
    public arrow: { has?: boolean, length?: number } = { has: true, length: 5 };
    public visible = true;

    constructor(...inits: Partial<Axis>[]) {
        Object.assign(this, ...inits);
    }
}

export class Ticks {
    public width = 1;
    public length = 3;
    public padding = 2;
    public quantity = 5;
    public color = 'white';
    public text: Text = new Text();

    constructor(...inits: Partial<Ticks>[]) {
        Object.assign(this, ...inits);
    }
}

export class Grid {
    public color = 'gray';
    public stroke_width = 1;
    public tillTheTop = false;

    constructor(...inits: Partial<Grid>[]) {
        Object.assign(this, ...inits);
    }
}

export class Extreems {
    public min: Point = new Point();
    public max: Point = new Point();
    public interval: { x?: number; y?: number; } = {};
    public division: Point = new Point();

    constructor(...inits: Partial<Extreems>[]) {
        Object.assign(this, ...inits);
    }
}

export class Ranges {
    public startDate: Date;
    public endDate: Date;
    // public startValue: number;
    // public endValue: number;

    constructor(...inits: Partial<Ranges>[]) {
        Object.assign(this, ...inits);
    }
}

export class CurrentTime {
    public lineColor = 'white';
    public text: Text = new Text();
    public textMargin = 4;
    public tickInterval = 1000; // 1 second
    public tillTheTop = false;

    constructor(...inits: Partial<CurrentTime>[]) {
        Object.assign(this, ...inits);
    }
}

export class Legends {
    public padding: Margin = new Margin({
        top: 4
    });
    public amongLegendsPadding = 10;
    public inLegendPadding = 5;
    public lineWidth = 20;
    public text: Text = new Text();
    public lines: Line = new Line({
        strokeWidth: 2,
        width: 17
    });

    constructor(...inits: Partial<Legends>[]) {
        Object.assign(this, ...inits);
    }
}

export class Tooltip {
    public lineColor = 'white';
    public dateText: Text = new Text();
    public padding = 2.5;

    constructor(...inits: Partial<Tooltip>[]) {
        Object.assign(this, ...inits);
    }
}

export class Text {
    public size = 10;
    public color = 'white';
    public font = 'Roboto-Regular';

    constructor(...inits: Partial<Text>[]) {
        Object.assign(this, ...inits);
    }
}

export class LastValue {
    public circle_radius = 2.5;
    public dash_array = '3, 3';
    public stroke_opacity = 0.5;
    public padding = 2;
    public box: Box = new Box();
    public colorOfitem = false;

    constructor(...inits: Partial<LastValue>[]) {
        Object.assign(this, ...inits);
    }
}

export class Box {
    public margin = 5;
    public height = 20;
    public width = 40;
    public arrow_width = 10;
    public text: Text = new Text({
        color: 'black',
        size: 12
    });

    constructor(...inits: Partial<Box>[]) {
        Object.assign(this, ...inits);
    }
}
// TODO: refactor all references to decorizeLine
export class Line {
    public width: number;
    public strokeWidth = 1;
    public stroke = 'white';
    public dashArray: string = null;

    constructor(...inits: Partial<Line>[]) {
        Object.assign(this, ...inits);
    }
}

export class Circle {
    public radius = 2;

    constructor(...inits: Partial<Circle>[]) {
        Object.assign(this, ...inits);
    }
}

export class Margin {
    public left = 0;
    public top = 0;
    public right = 0;
    public bottom = 0;

    constructor(...inits: Partial<Margin>[]) {
        Object.assign(this, ...inits);
    }
}

export class HorizontalLine {
    public value: number;
    public label: string;

    constructor(...inits: Partial<HorizontalLine>[]) {
        Object.assign(this, ...inits);
    }
}

export class HorizontalLinesConfig {
    public line = new Line({
        dashArray: '5, 5',
        stroke: '#4B5160'
    });
    public labelPadding = 3;
    public text: Text = new Text({
        size: 10,
        color: '#525A66'
    });

    constructor(...inits: Partial<HorizontalLinesConfig>[]) {
        Object.assign(this, ...inits);
    }
}

export class OnLineCross {
    public accordingTo: number | string; // name of the line according to what to do
    public fill: Fill = null;

    constructor(...inits: Partial<OnLineCross>[]) {
        Object.assign(this, ...inits);
    }
}

export class Fill {
    public color: string | [string, string];
    public on: 'above' | 'below' = 'above';

    constructor(...inits: Partial<Fill>[]) {
        Object.assign(this, ...inits);
    }
}

