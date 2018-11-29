import * as d3 from "d3";

import {
    Item,
    Options,
    Point,
    PointParented,
    Extreems,
    Coordinate,
    Text
} from "./chart.models";
import {
    dataIsNotEmpty,
    normalizeNumber,
    textSizeCoefficient,
    format,
    isset,
    getBBox,
    decorizeText,
    getClosestPoints,
    decorizeLine,
    accurateTillSecond,
    accurateTillMinute,
    accurateTillHour,
    accurateTillDay,
    prevSecond,
    nextSecond,
    prevMinute,
    nextMinute,
    prevHour,
    nextHour,
    prevDay,
    nextDay,
    prevMonth,
    nextMonth,
    prevYear,
    nextYear,
    accurateTillYear,
    accurateTillMonth
} from "./chart.bll";
import * as _ from "lodash";
import { BaseType } from "d3";
import * as moment from "moment";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

export class Chart {
    // TODO: solve postloading fonts problem

    protected static maskCounter = 0;
    protected dataIsNotEmpty = true;

    protected opts: Options = new Options();

    protected svg: d3.Selection<SVGElement, any, HTMLElement, any>;
    protected background: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected body: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected axises: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected axisX: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected axisY: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected grids: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected currentTimeG: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected horizontalLinesG: d3.Selection<
        SVGGElement,
        any,
        HTMLElement,
        any
    >;
    protected charts: d3.Selection<SVGGElement, Item, SVGGElement, any>;
    protected labeledPointsG: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected legends: d3.Selection<SVGGElement, any, HTMLElement, any>;
    protected defs: d3.Selection<SVGDefsElement, any, HTMLElement, any>;
    protected defsElements: string[] = [];
    protected tooltip: d3.Selection<SVGGElement, any, HTMLElement, any>;

    protected extreems: Extreems = new Extreems();
    protected width: number; // body width
    protected height: number; // body height
    protected xScale: d3.ScaleTime<number, number>;
    protected yScale: d3.ScaleLinear<number, number>;
    protected line: d3.Line<Point>;
    protected ticks: {
        x: number[];
        y: number[];
    } = { x: [], y: [] };
    protected prevBoxPeak: Coordinate;
    protected accurateDateTill: (date: Date) => Date;
    protected nextDatePeriod: (date: Date) => Date;
    protected prevDatePeriod: (date: Date) => Date;

    protected horizontalLines: Item[] = [];

    protected labeledPoints: Point[] = [];

    public timer: Subscription;

    protected allPoints: PointParented[] = [];

    // constants
    protected yMarginCoefficient = 0.2;

    protected monthes: string[] = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    constructor(protected $element: JQuery, protected data: Item[]) {
        // this.data = _(this.data).cloneDeep();
    }

    protected init() {
        this.dataIsNotEmpty = dataIsNotEmpty(this.data);
        this.initOptions();
        this.initMarkup();

        this.preprocessData();
        this.calcExtreems();
        this.initScales();

        this.line = d3
            .line<Point>()
            .x(d => this.xScale(d.date))
            .y(d => this.yScale(d.value));

        // separate horizontal lines
        this.data.forEach(item => {
            if (item.horizontalLine) {
                this.horizontalLines.push(item);
                item.values.push(
                    new Point({
                        date: this.xScale.invert(0),
                        value: item.horizontalLine.value
                    })
                );
                item.values.push(
                    new Point({
                        date: this.xScale.invert(this.width),
                        value: item.horizontalLine.value
                    })
                );
            }
        });

        _.remove(this.data, item => {
            const bool: boolean = item.horizontalLine != null;
            return bool;
        });
    }

    protected initOptions() {}

    protected initMarkup() {
        this.$element.find("svg").remove();

        this.width =
            this.opts.width - this.opts.margin.left - this.opts.margin.right;
        this.height =
            this.opts.height - this.opts.margin.top - this.opts.margin.bottom;

        this.svg = d3.select(this.$element[0]).append("svg") as any;
        this.svg
            .attr("viewBox", `0 0 ${this.opts.width} ${this.opts.height}`)
            .style("width", "100%")
            .style("height", "100%");

        this.defs = this.svg.append<SVGDefsElement>("defs");

        this.defsElements.forEach(elem => $(this.defs.node()).append(elem));

        this.background = this.svg
            .append<SVGGElement>("g")
            .attr("class", "background");

        this.background
            .append("rect")
            .attr("class", "background")
            .attr("width", this.opts.width)
            .attr("height", this.opts.height)
            .style("fill", this.opts.background_color);

        this.body = this.svg
            .append<SVGGElement>("g")
            .attr("class", "body")
            .attr(
                "transform",
                `translate(${this.opts.margin.left}, ${this.opts.margin.top})`
            );
        if (this.opts.body_color) {
            this.body
                .append("rect")
                .attr("width", this.width)
                .attr("height", this.height)
                .style("fill", this.opts.body_color);
        }

        this.grids = this.body.append<SVGGElement>("g").attr("class", "grids");
        this.axises = this.body
            .append<SVGGElement>("g")
            .attr("class", "axises");
        this.axisX = this.axises
            .append<SVGGElement>("g")
            .attr("class", "axis x")
            .attr("transform", `translate(0, ${this.height})`);
        this.axisY = this.axises
            .append<SVGGElement>("g")
            .attr("class", "axis y");

        this.currentTimeG = this.body
            .append<SVGGElement>("g")
            .attr("class", "current-time");

        this.horizontalLinesG = this.body
            .append<SVGGElement>("g")
            .attr("class", "horizontal-lines");

        this.charts = this.body
            .append<SVGGElement>("g")
            .attr("class", "charts")
            .selectAll("g.chart")
            .data(this.data)
            .enter()
            .append<SVGGElement>("g")
            .attr("class", item => `chart-${item.name}`);

        this.labeledPointsG = this.body
            .append<SVGGElement>("g")
            .attr("class", "labeled-points");

        this.legends = this.svg
            .append<SVGGElement>("g")
            .attr("class", "legends");
    }

    protected preprocessData() {
        switch (this.opts.periodType) {
            case "seconds":
                this.accurateDateTill = accurateTillSecond;
                this.nextDatePeriod = nextSecond;
                this.prevDatePeriod = prevSecond;
                break;
            case "minutes":
                this.accurateDateTill = accurateTillMinute;
                this.nextDatePeriod = nextMinute;
                this.prevDatePeriod = prevMinute;
                break;
            case "hours":
                this.accurateDateTill = accurateTillHour;
                this.nextDatePeriod = nextHour;
                this.prevDatePeriod = prevHour;
                break;
            case "days":
                this.accurateDateTill = accurateTillDay;
                this.nextDatePeriod = nextDay;
                this.prevDatePeriod = prevDay;
                break;
            case "months":
                this.accurateDateTill = accurateTillMonth;
                this.nextDatePeriod = nextMonth;
                this.prevDatePeriod = prevMonth;
                break;
            case "years":
                this.accurateDateTill = accurateTillYear;
                this.nextDatePeriod = nextYear;
                this.prevDatePeriod = prevYear;
                break;
        }

        // remove points with null value in the end of the list
        // and append points with lacking point

        this.data.forEach((d, index) => {
            const points = d.values;
            points.sort((a, b) => a.date.getTime() - b.date.getTime());
            for (let i = points.length - 1; i >= 0; i--) {
                const point = points[i];

                const prevPoint = points[i - 1];
                let currentPoint = point;

                point.date = this.accurateDateTill(point.date);
                if (prevPoint) {
                    prevPoint.date = this.accurateDateTill(prevPoint.date);
                }

                // append points with lacking point
                let prevDate = this.prevDatePeriod(currentPoint.date);
                while (
                    prevPoint &&
                    prevPoint.date.getTime() < prevDate.getTime()
                ) {
                    currentPoint = new Point({
                        date: prevDate,
                        value: null
                    });
                    points.push(currentPoint);
                    prevDate = this.prevDatePeriod(currentPoint.date);
                }
            }

            points.sort((a, b) => a.date.getTime() - b.date.getTime());
        });
    }

    protected postprocessData() {
        this.data.forEach((data, i) => {
            data.values.forEach(value => {
                const point = new PointParented({
                    date: _(value.date).clone(),
                    value: value.value,
                    item: data,
                    order: i
                });

                this.allPoints.push(point);
            });
        });

        this.allPoints.sort((a, b) => a.date.getTime() - b.date.getTime());
    }

    protected calcExtreems() {
        this.extreems.interval.x =
            this.width / this.opts.axises.x.ticks.quantity;
        this.extreems.interval.y =
            this.height / this.opts.axises.y.ticks.quantity;

        this.extreems.min.value = Number.MAX_VALUE;
        this.extreems.max.value = Number.NEGATIVE_INFINITY;
        this.extreems.min.date = this.opts.ranges.startDate
            ? this.opts.ranges.startDate
            : new Date(8640000000000000);
        this.extreems.max.date = this.opts.ranges.endDate
            ? this.opts.ranges.endDate
            : new Date(0);

        this.data.forEach(item => {
            item.values.forEach(point => {
                if (point.date.getTime() < this.extreems.min.date.getTime()) {
                    this.extreems.min.date = point.date;
                }
                if (point.date.getTime() > this.extreems.max.date.getTime()) {
                    this.extreems.max.date = point.date;
                }
                if (
                    isset(point.value) &&
                    point.value < this.extreems.min.value
                ) {
                    this.extreems.min.value = point.value;
                }
                if (
                    isset(point.value) &&
                    point.value > this.extreems.max.value
                ) {
                    this.extreems.max.value = point.value;
                }
                this.fillLabeledPointsList(point, item.color);
            });
            if (item.horizontalLine != null) {
                if (item.horizontalLine.value < this.extreems.min.value) {
                    this.extreems.min.value = item.horizontalLine.value;
                }
                if (item.horizontalLine.value > this.extreems.max.value) {
                    this.extreems.max.value = item.horizontalLine.value;
                }
            }
        });

        // use cases of value extreems
        if (this.extreems.min.value === Number.MAX_VALUE) {
            this.extreems.min.value = 0;
            this.extreems.max.value = 1;
        } else if (this.extreems.max.value === this.extreems.min.value) {
            this.extreems.max.value += 1;
            this.extreems.min.value -= 1;
        } else {
            const totalLength =
                this.extreems.max.value - this.extreems.min.value;
            this.extreems.max.value += totalLength * this.yMarginCoefficient;
            this.extreems.min.value -= totalLength * this.yMarginCoefficient;
        }

        // use cases of date extreems
        if (this.extreems.max.date.getTime() === new Date(0).getTime()) {
            this.extreems.min.date = new Date();
            this.extreems.max.date = new Date();
            this.extreems.max.date.setDate(
                this.extreems.max.date.getDate() + 1
            );
        }

        this.extreems.division.value =
            (this.extreems.max.value - this.extreems.min.value) /
            this.opts.axises.y.ticks.quantity;
    }

    protected fillLabeledPointsList(value: Point, color: string) {
        if (value.labeled) {
            value.labeled.color = color;
            this.labeledPoints.push(value);
        }
    }

    protected drawLabeledPoints() {
        this.labeledPoints.forEach(point => {
            const labelsG = this.labeledPointsG
                .append<SVGGElement>("g")
                .attr("class", "point-labels");
            let currentPosition = 0;
            point.labeled.labels.forEach((label, i) => {
                const labelG = labelsG
                    .append<SVGGElement>("g")
                    .attr("class", "label")
                    .attr("transform", `translate(${currentPosition}, 0)`);

                const rect = labelG
                    .append<SVGRectElement>("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("fill", point.labeled.color);

                const rectRounded = labelG
                    .append<SVGRectElement>("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("fill", point.labeled.color)
                    .attr("rx", 2)
                    .attr("ry", 2);

                const textG = labelG
                    .append<SVGGElement>("g")
                    .attr("class", "text")
                    .attr(
                        "transform",
                        `
                        translate(
                            ${this.opts.labeledPointsConfig.padding.innerLeft},
                            ${this.opts.labeledPointsConfig.padding.innerTop})
                        `
                    );
                textG
                    .append<SVGTextElement>("text")
                    .attr("x", 0)
                    .attr("y", "1em")
                    .call(decorizeText, this.opts.labeledPointsConfig.text)
                    .text(label);

                rect.attr(
                    "width",
                    getBBox(textG).width +
                        this.opts.labeledPointsConfig.padding.innerLeft * 2
                ).attr(
                    "height",
                    getBBox(textG).height +
                        this.opts.labeledPointsConfig.padding.innerTop * 2
                );
                rectRounded
                    .attr(
                        "width",
                        getBBox(textG).width +
                            this.opts.labeledPointsConfig.padding.innerLeft * 2
                    )
                    .attr(
                        "height",
                        getBBox(textG).height +
                            this.opts.labeledPointsConfig.padding.innerTop * 2
                    );

                if (i === 0) {
                    rect.attr(
                        "x",
                        this.opts.labeledPointsConfig.padding.innerLeft
                    ).attr(
                        "width",
                        getBBox(textG).width +
                            this.opts.labeledPointsConfig.padding.innerLeft
                    );
                } else if (i === point.labeled.labels.length - 1) {
                    rect.attr(
                        "width",
                        getBBox(textG).width +
                            this.opts.labeledPointsConfig.padding.innerLeft
                    );
                }

                currentPosition +=
                    getBBox(labelG).width +
                    this.opts.labeledPointsConfig.padding.betweenLabels;
            });

            const getXDeviation = (): number => {
                const deviation =
                    this.xScale(point.date) - getBBox(labelsG).width / 2;
                return deviation < 0 ? 0 : deviation;
            };
            const getYDeviation = (): number => {
                if (point.labeled.on === "above") {
                    return (
                        this.yScale(point.value) -
                        this.opts.labeledPointsConfig.padding.fromPoint -
                        getBBox(labelsG).height
                    );
                } else {
                    return (
                        this.yScale(point.value) +
                        this.opts.labeledPointsConfig.padding.fromPoint
                    );
                }
            };

            labelsG.attr(
                "transform",
                `translate(
                    ${getXDeviation()},
                    ${getYDeviation()}
                )`
            );
        });
    }

    protected initScales() {
        this.xScale = d3
            .scaleTime<number, number>()
            .range([0, this.width])
            .domain([this.extreems.min.date, this.extreems.max.date]);

        this.yScale = d3
            .scaleLinear()
            .range([this.height, 0])
            .domain([this.extreems.min.value, this.extreems.max.value]);
    }

    public draw() {
        this.init();
        this.fillTicks();
        this.drawXGrid();
        this.drawYGrid();

        this.drawXAxis();
        this.drawYAxis();

        this.drawCurrentTime();
        this.drawAreas();
        this.drawHorizontalLines();
        this.drawCharts();
        this.drawLabeledPoints();
        this.drawLegends();
        this.drawTooltip();

        // here processes data which has post requirements
        this.postprocessData();
    }

    protected fillTicks() {
        for (let i = 0; i <= this.opts.axises.y.ticks.quantity; i++) {
            this.ticks.y.push(i * this.extreems.interval.y);
        }

        if (this.opts.periodType === "minutes") {
            for (let i = 0; i <= this.opts.axises.x.ticks.quantity; i++) {
                this.ticks.x.push(i * this.extreems.interval.x);
            }
        } else if (this.opts.periodType === "months") {
            for (
                let i = this.extreems.min.date.getTime();
                i <= this.extreems.max.date.getTime();
                i += 1000 * 60 * 60 * 24
            ) {
                if (new Date(i).getDate() === 1) {
                    this.ticks.x.push(this.xScale(new Date(i)));
                }
            }
        }
    }

    protected drawXGrid() {
        this.grids
            .append("g")
            .attr("class", "grid x")
            .selectAll("line")
            .data(this.ticks.x)
            .enter()
            .append("line")
            .attr("x1", tick => tick)
            .attr("x2", tick => tick)
            .attr("y1", this.opts.grid.tillTheTop ? -this.opts.margin.top : 0)
            .attr("y2", this.height)
            .style("stroke", this.opts.grid.color)
            .style("stroke-width", this.opts.grid.stroke_width);
    }

    protected drawYGrid() {
        this.grids
            .append("g")
            .attr("class", "grid y")
            .selectAll("line")
            .data(this.ticks.y)
            .enter()
            .append("line")
            .attr("x1", 0)
            .attr("x2", this.width)
            .attr("y1", tick => tick)
            .attr("y2", tick => tick)
            .style("stroke", this.opts.grid.color)
            .style("stroke-width", this.opts.grid.stroke_width);
    }

    protected drawXAxis() {
        // draw straight line
        this.axisX
            .append<SVGLineElement>("line")
            .attr("x1", 0)
            .attr("x2", this.width)
            .attr("y1", 0)
            .attr("y2", 0)
            .style("stroke", this.opts.axises.x.color)
            .style("stroke-width", this.opts.axises.x.stroke_width);

        // draw arrow part
        if (this.opts.axises.x.arrow.has) {
            // draw line
            this.axisX
                .append<SVGLineElement>("line")
                .attr("x1", this.width)
                .attr("x2", this.width + this.opts.axises.x.arrow.length)
                .attr("y1", 0)
                .attr("y2", 0)
                .style("stroke", this.opts.axises.x.color)
                .style("stroke-width", this.opts.axises.x.stroke_width);
            // draw arrow
        }

        this.drawXAxisTicks();

        // add axis measurement text
        if (this.opts.measurementLabel) {
            const lastTickText = this.axisX.select(
                `.tick-text-${this.ticks.x.length - 1}`
            );
            this.axisX
                .append("text")
                .attr("class", "measurement-label")
                .attr(
                    "x",
                    Number(lastTickText.attr("x")) +
                        getBBox(lastTickText).width / 2 +
                        2
                )
                .attr("y", lastTickText.attr("y"))
                .style("font-size", this.opts.axises.x.ticks.text.size)
                .style("text-anchor", "start")
                .style("fill", this.opts.axises.x.ticks.text.color)
                .style("font-family", this.opts.axises.x.ticks.text.font)
                .text(this.opts.measurementLabel);
        }
    }

    protected drawXAxisTicks() {
        // draw ticks
        this.axisX
            .selectAll("line.tick")
            .data(this.ticks.x)
            .enter()
            .append("line")
            .attr("class", "tick")
            .attr("x1", tick => tick)
            .attr("x2", tick => tick)
            .attr("y1", 0)
            .attr("y2", this.opts.axises.x.ticks.length)
            .style("stroke", this.opts.axises.x.ticks.color)
            .style("stroke-width", this.opts.axises.x.ticks.width);

        if (this.opts.periodType === "minutes") {
            this.axisX
                .selectAll("text.tick-text")
                .data(this.ticks.x)
                .enter()
                .append("text")
                .attr("class", (tick, i) => `tick-text-${i}`)
                .attr("x", tick => tick)
                .attr(
                    "y",
                    this.opts.axises.x.ticks.length +
                        this.opts.axises.x.ticks.text.size
                )
                .style("text-anchor", "middle")
                .call(decorizeText, this.opts.axises.x.ticks.text)
                .text((tick, i) => {
                    const minutes = this.xScale.invert(tick).getMinutes();
                    return minutes === 0 && i !== 0 ? 60 : minutes;
                });
        } else if (this.opts.periodType === "months") {
            const ticksG = this.axisX.append("g").attr("class", "ticks");

            const ticks = this.ticks.x;
            for (let i = 0; i < ticks.length - 1; i++) {
                const tick = ticks[i];
                ticksG
                    .append("text")
                    .call(
                        decorizeText,
                        new Text({
                            color: "#DBDCDE",
                            size: 10
                        })
                    )
                    .style("text-anchor", "middle")
                    .attr("x", tick + (ticks[i + 1] - tick) / 2)
                    .attr("y", this.opts.margin.bottom / 2 + 5)
                    .text(this.monthes[this.xScale.invert(tick).getMonth()]);
            }
        }
    }

    protected drawYAxis() {
        let div = this.extreems.division.value,
            p = 1,
            str = "",
            n = 0;
        if (div > 1000) {
            p = 1000;
            str = "к";
            n = 3;
        }
        if (div > 1000000) {
            p = 1000000;
            str = "м";
            n = 6;
        }
        div = normalizeNumber(div / p, this.opts.precision);

        // const precision = div * p < 1 ? this.opts.precision : getPrecision(div);
        const precision = this.opts.precision;

        // draw straight line
        this.axisY
            .append<SVGLineElement>("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", this.height)
            .style("stroke", this.opts.axises.y.color)
            .style("stroke-width", this.opts.axises.y.stroke_width);

        // draw arrow
        if (this.opts.axises.y.arrow.has) {
            this.axisY
                .append<SVGLineElement>("line")
                .attr("x1", 0)
                .attr("x2", 0)
                .attr("y1", 0)
                .attr("y2", -this.opts.axises.y.arrow.length)
                .style("stroke", this.opts.axises.y.color)
                .style("stroke-width", this.opts.axises.y.stroke_width);
        }

        // draw ticks
        this.axisY
            .selectAll("line.tick")
            .data(this.ticks.y)
            .enter()
            .append("line")
            .attr("class", "tick")
            .attr("x1", 0)
            .attr("x2", -this.opts.axises.y.ticks.length)
            .attr("y1", tick => tick)
            .attr("y2", tick => tick)
            .style("stroke", this.opts.axises.y.ticks.color)
            .style("stroke-width", this.opts.axises.y.ticks.width);

        this.axisY
            .selectAll("text.tick-text")
            .data(this.ticks.y)
            .enter()
            .append("text")
            .attr("class", "tick-text")
            .attr(
                "x",
                -this.opts.axises.y.ticks.length -
                    this.opts.axises.y.ticks.padding
            )
            .attr(
                "y",
                tick =>
                    tick +
                    (this.opts.axises.y.ticks.text.size * textSizeCoefficient) /
                        2
            )
            .style("font-size", this.opts.axises.y.ticks.text.size)
            .style("text-anchor", "end")
            .style("fill", this.opts.axises.y.ticks.text.color)
            .style("font-family", this.opts.axises.y.ticks.text.font)
            .text(tick => {
                const value = normalizeNumber(
                    this.yScale.invert(tick) / p,
                    this.opts.precision
                );
                return this.yScale.invert(tick) === 0
                    ? 0
                    : format(value, precision) + str;
            });
    }

    /**
     * draws linecharts or area with breakage if null value presented
     * @param drawer function which draws lines or areas.
     * This function will be called several times according to how many null breakage points will appear
     */
    protected drawPartialy(item: Item, drawer: (values: Point[]) => void) {
        let index = 0;
        const $values = item.values;
        while (index < $values.length) {
            const values: Point[] = [];
            let current: Point = $values[index];
            while (index < $values.length && !_.isNil(current.value)) {
                values.push(current);
                current = $values[++index];
            }
            if (
                values.length > 1 ||
                (values.length === 1 && !_.isNil(values[0].value))
            ) {
                drawer(values);
            } else {
                index++;
            }
        }
    }

    protected drawAreas() {
        const lineArea = d3
            .area<Point>()
            .x(p => this.xScale(p.date))
            .y1(p => this.yScale(p.value));

        const crossLineArea = d3
            .area<Point>()
            .x(p => this.xScale(p.date))
            .y1(p => this.yScale(p.value));

        this.data.forEach((item, i) => {
            const chart = this.svg.select(".chart-" + item.name);

            const drawer = (values: Point[]) => {
                if (item.onLineCrosses && item.onLineCrosses.length) {
                    chart.datum(item);
                    const defs = chart
                        .append<SVGDefsElement>("defs")
                        .attr("class", "masks")
                        .datum<Item>(p => p);

                    item.onLineCrosses.forEach(onLineCross => {
                        if (onLineCross.fill) {
                            if (onLineCross.fill.on === "above") {
                                crossLineArea.y0(0);
                                lineArea.y0(this.height);
                            } else {
                                crossLineArea.y0(this.height);
                                lineArea.y0(0);
                            }

                            defs.append("clipPath")
                                .attr(
                                    "id",
                                    p =>
                                        `clipper-${p.name}-to-${
                                            onLineCross.accordingTo
                                        }-${Chart.maskCounter}`
                                )
                                .append("path")
                                .attr("d", p => {
                                    crossLineArea.curve(item.interpolation);

                                    const relativeLine = _(
                                        this.data.concat(this.horizontalLines)
                                    ).find(
                                        l => l.name === onLineCross.accordingTo
                                    );
                                    if (relativeLine) {
                                        return crossLineArea(
                                            relativeLine.values
                                        );
                                    } else {
                                        return crossLineArea([]);
                                    }
                                })
                                .style("stroke-width", "0px")
                                .select(function() {
                                    return (this as any)
                                        .parentNode.parentNode.parentNode;
                                })
                                .append("path")
                                .attr("d", p => {
                                    lineArea.curve(item.interpolation);
                                    return lineArea(values);
                                })
                                .attr(
                                    "clip-path",
                                    p =>
                                        `url(#clipper-${p.name}-to-${
                                            onLineCross.accordingTo
                                        }-${Chart.maskCounter})`
                                )
                                .style("fill", p => {
                                    if (
                                        typeof onLineCross.fill.color ===
                                        "string"
                                    ) {
                                        return onLineCross.fill.color.toString();
                                    }
                                    return "";
                                })
                                .style("fill-opacity", "0.15")
                                .style("stroke-width", "0px");
                        }
                    });
                }

                Chart.maskCounter++;
            };

            this.drawPartialy(item, drawer);
        });
    }

    protected drawHorizontalLines() {
        this.horizontalLines.forEach(line => {
            const g = this.horizontalLinesG
                .append<SVGGElement>("g")
                .attr("class", "horizontal-line");
            g.append("line")
                .attr("x1", 0)
                .attr("x2", this.width)
                .attr("y1", this.yScale(line.horizontalLine.value))
                .attr("y2", this.yScale(line.horizontalLine.value))
                .call(decorizeLine, this.opts.horizontalLinesConfig.line);

            const text = g
                .append("text")
                .attr(
                    "x",
                    this.width + this.opts.horizontalLinesConfig.labelPadding
                )
                .attr("y", this.yScale(line.horizontalLine.value))
                .call(decorizeText, this.opts.horizontalLinesConfig.text)
                .text(line.horizontalLine.label);

            text.attr(
                "transform",
                `translate(0, ${(this.opts.horizontalLinesConfig.text.size *
                    textSizeCoefficient) /
                    2})`
            );
        });
    }

    protected drawCharts() {
        this.drawLinecharts();
    }

    protected drawLinecharts() {
        this.defs
            .append("g")
            .attr("id", "arrow-label")
            .append("path")
            .attr(
                "d",
                `M49,0H9.3C8.5,0,7.7,0.4,7.1,1L0.8,8c-1,1.1-1,2.9,0,4l6.3,7c0.6,0.6,1.4,1,2.2,1H49c1.7,0,3-1.3,3-3V3
                        C52,1.3,50.7,0,49,0z`
            );

        this.data.sort((a, b) => {
            const lastValueA = this.getSetLastValue(a.values);
            const lastValueB = this.getSetLastValue(b.values);
            if (!lastValueA || !lastValueB) {
                return 0;
            }
            return lastValueA.value - lastValueB.value;
        });

        this.data.forEach((item, i) => {
            const chart = this.body.select(`.chart-${item.name}`);
            chart.append("g").attr("class", "circles");

            const drawer = (values: Point[]): void => {
                // draws line
                chart
                    .append("path")
                    .datum(values)
                    .attr("class", "line")
                    .attr("d", this.line.curve(item.interpolation))
                    .style("stroke", item.color)
                    .style("stroke-width", item.stroke_width)
                    .style(
                        "stroke-dasharray",
                        item.dashed ? item.dash_array : undefined
                    )
                    .style("fill", "none");

                // draws visual circles on endpoints
                const firstPoint = values[0];
                const lastPoint = values[values.length - 1];

                const circler = (point: Point): void => {
                    chart
                        .append("circle")
                        .attr("r", this.opts.last_value.circle_radius)
                        .attr("cx", this.xScale(point.date))
                        .attr("cy", this.yScale(point.value))
                        .style("stroke", "white")
                        .style("stroke-width", 0.5)
                        .style("fill", item.color);
                };

                if (
                    firstPoint &&
                    firstPoint.date.getTime() > this.extreems.min.date.getTime()
                ) {
                    circler(firstPoint);
                }
                if (
                    lastPoint &&
                    lastPoint.date.getTime() < this.extreems.max.date.getTime()
                ) {
                    circler(lastPoint);
                }

                this.drawCircles(chart, item, values);
            };

            this.drawPartialy(item, drawer);

            this.drawLastValue(item, chart);
        });
    }

    protected drawLastValue(
        item: Item,
        chart: d3.Selection<BaseType, any, HTMLElement, any>
    ) {
        const lastValue = this.getSetLastValue(item.values);
        if (lastValue) {
            // draw dashed pointer line
            chart
                .append("line")
                .attr("x1", this.xScale(lastValue.date))
                .attr("y1", this.yScale(lastValue.value))
                .attr("x2", this.xScale(this.extreems.max.date))
                .attr("y2", this.yScale(lastValue.value))
                .style("stroke", item.color)
                .style("stroke-opacity", this.opts.last_value.stroke_opacity)
                .style("stroke-dasharray", this.opts.last_value.dash_array);

            // draw circle in the end of the line-chart
            chart
                .append("circle")
                .attr("r", this.opts.last_value.circle_radius)
                .attr("cx", this.xScale(lastValue.date))
                .attr("cy", this.yScale(lastValue.value))
                .style("fill", item.color);

            // draw last value box
            // draw pointer
            const boxPeak = new Coordinate({
                x:
                    this.xScale(this.extreems.max.date) +
                    this.opts.last_value.box.margin,
                y: this.yScale(lastValue.value)
            });

            if (!this.prevBoxPeak) {
                if (
                    this.height - boxPeak.y <
                    this.opts.last_value.box.height / 2
                ) {
                    boxPeak.y =
                        this.height - this.opts.last_value.box.height / 2;
                }
            } else {
                if (
                    this.prevBoxPeak.y - boxPeak.y <
                    this.opts.last_value.box.height +
                        this.opts.last_value.padding
                ) {
                    boxPeak.y =
                        this.prevBoxPeak.y -
                        this.opts.last_value.box.height -
                        this.opts.last_value.padding;
                }
            }

            chart
                .append("line")
                .attr("x1", this.xScale(this.extreems.max.date))
                .attr("y1", this.yScale(lastValue.value))
                .attr("x2", boxPeak.x)
                .attr("y2", boxPeak.y)
                .style("stroke", item.color)
                .style("stroke-opacity", this.opts.last_value.stroke_opacity)
                .style("stroke-dasharray", this.opts.last_value.dash_array);

            // draw boxG
            const box = chart
                .append("g")
                .attr("class", "box")
                .attr(
                    "transform",
                    `translate(${boxPeak.x}, ${boxPeak.y -
                        this.opts.last_value.box.height / 2})`
                );

            box.append("text")
                .attr("x", this.opts.last_value.box.arrow_width)
                .attr(
                    "y",
                    this.opts.last_value.box.height / 2 +
                        (this.opts.last_value.box.text.size *
                            textSizeCoefficient) /
                            2
                )
                .style("font-size", this.opts.last_value.box.text.size)
                .style(
                    "fill",
                    this.opts.last_value.colorOfitem
                        ? item.color
                        : this.opts.last_value.box.text.color
                )
                .style("font-family", this.opts.last_value.box.text.font)
                .style("text-anchor", "start")
                .text(format(lastValue.value));

            this.prevBoxPeak = new Coordinate({ x: boxPeak.x, y: boxPeak.y });
        }
    }

    protected getSetLastValue(values: Point[]): Point {
        let currentValue: Point = null;
        for (let i = values.length - 1; i >= 0; i--) {
            currentValue = values[i];
            if (!_.isNil(currentValue.value)) {
                return currentValue;
            }
        }
        return null;
    }

    protected drawCircles(
        chart: d3.Selection<BaseType, any, HTMLElement, any>,
        item: Item,
        values: Point[]
    ) {
        if (item.circle) {
            const circlesG = chart.select("g.circles");

            values.forEach(value => {
                circlesG
                    .append("circle")
                    .attr("r", item.circle.radius)
                    .attr("cx", this.xScale(value.date))
                    .attr("cy", this.yScale(value.value))
                    .style("fill", item.color);
            });
        }
    }

    protected drawCurrentTime() {
        if (this.opts.currentTime) {
            this.currentTimeG
                .append("line")
                .attr("x1", 0)
                .attr("x2", 0)
                .attr(
                    "y1",
                    this.opts.currentTime.tillTheTop ? -this.opts.margin.top : 0
                )
                .attr("y2", this.yScale(this.extreems.min.value))
                .attr("stroke", this.opts.currentTime.lineColor);

            this.timer = Observable.interval(
                this.opts.currentTime.tickInterval
            ).subscribe(value => {
                if (this.xScale(new Date()) <= this.width) {
                    this.currentTimeG.attr(
                        "transform",
                        `translate(${this.xScale(new Date())}, ${0})`
                    );
                } else {
                    this.currentTimeG.style("display", "none");
                    this.timer.unsubscribe();
                }
            });
        }
    }

    protected drawLegends() {
        const xAxisHeight = getBBox(this.axisX).height;

        this.legends.attr(
            "transform",
            `translate(
                ${this.opts.margin.left},
                ${this.opts.margin.top +
                    this.height +
                    xAxisHeight +
                    this.opts.legends.padding.top})
            `
        );

        let prevLegend;
        this.data.forEach(item => {
            const legend = this.legends
                .append<SVGGElement>("g")
                .attr("class", "legend");

            this.drawLegend(legend, item);

            if (prevLegend) {
                legend.attr(
                    "transform",
                    `translate(${getBBox(prevLegend).width +
                        this.opts.legends.amongLegendsPadding}, 0)`
                );
            }
            prevLegend = legend;
        });
    }

    protected drawLegend(
        legend: d3.Selection<SVGGElement, any, HTMLElement, any>,
        item: Item
    ) {
        legend
            .append("line")
            .attr("x1", 0)
            .attr("x2", this.opts.legends.lines.width)
            .attr("y1", this.opts.legends.text.size / 0.77 / 2)
            .attr("y2", this.opts.legends.text.size / 0.77 / 2)
            .style("stroke", item.color)
            .style("stroke-width", this.opts.legends.lines.strokeWidth);

        legend
            .append("text")
            .attr(
                "x",
                this.opts.legends.lines.width +
                    this.opts.legends.inLegendPadding
            )
            .attr("y", "1em")
            .call(decorizeText, this.opts.legends.text)
            .text(item.title);
    }

    protected drawTooltip() {
        // create tooltip body
        this.tooltip = this.body
            .append<SVGGElement>("g")
            .attr("class", "tooltip")
            .style("display", "none");

        this.tooltip
            .append<SVGLineElement>("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", this.height)
            .style("stroke", this.opts.tooltip.lineColor);

        const texts = this.tooltip.append("g").attr("class", "texts");

        texts
            .append<SVGTextElement>("text")
            .attr("text-anchor", "start")
            .attr("class", "tooltip-date")
            .call(decorizeText, this.opts.tooltip.dateText)
            .attr("x", this.opts.tooltip.padding);

        texts.append<SVGGElement>("g").attr("class", "values");

        // create layout area where mouse move will be catched
        const handlingLayout = this.body
            .append<SVGRectElement>("rect")
            .attr("width", this.width)
            .attr("height", this.height)
            .style("fill-opacity", "0");

        // handle mouse move event and move tooltip
        const self = this;
        handlingLayout.on("mousemove", function() {
            const cords = d3.mouse(this);
            const cordx = cords[0];

            const points = getClosestPoints(
                self.xScale.invert(cordx),
                self.allPoints
            );
            if (points.length) {
                self.updateTooltip(points);
            }
        });

        handlingLayout.on("mouseleave", () => {
            this.tooltip.style("display", "none");
        });
    }

    protected updateTooltip(points: PointParented[]) {
        const date = points[0].date;
        this.tooltip.attr("transform", `translate(${this.xScale(date)}, 0)`);

        const tooltipDate = this.tooltip.select<SVGTextElement>(
            "text.tooltip-date"
        );
        tooltipDate.text(moment(date).format(this.opts.tooltipDateFormat));

        const valuesG = this.tooltip.select<SVGGElement>("g.values");
        valuesG.html("");
        let currentPosition = 0;
        points.forEach((point, i) => {
            const value = valuesG
                .append<SVGTextElement>("text")
                .attr("text-anchor", "end")
                .attr("x", `-${this.opts.tooltip.padding + currentPosition}`)
                .call(decorizeText, this.opts.tooltip.dateText)
                .style("fill", point.item.color)
                .text(format(point.value));
            currentPosition += this.opts.tooltip.padding + getBBox(value).width;
        });

        const texts = this.tooltip.select<SVGTextElement>("g.texts");
        const differenceLeft = this.xScale(date) - getBBox(valuesG).width;
        const differenceRight =
            this.width - this.xScale(date) - getBBox(tooltipDate).width;
        if (differenceLeft < 0) {
            texts.attr(
                "transform",
                `translate(${-1 * differenceLeft +
                    this.opts.tooltip.padding * 2}, 0)`
            );
        } else if (differenceRight < 0) {
            texts.attr(
                "transform",
                `translate(${differenceRight +
                    this.opts.tooltip.padding * 2}, 0)`
            );
        } else {
            texts.attr("transform", "translate(0, 0)");
        }

        if (this.tooltip.style("display") === "none") {
            this.tooltip.style("display", "block");
        }
    }

    protected drawBarcharts() {}
}
