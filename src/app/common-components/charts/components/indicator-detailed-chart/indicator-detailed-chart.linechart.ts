import { Chart } from "../../chart.base-class";
import {
    Item,
    LastValue,
    Box,
    Text,
    LabeledPointsConfig,
    HorizontalLinesConfig,
    Grid,
    Line,
    PointParented,
    Point
} from "../../chart.models";
import * as _ from "lodash";
import {
    decorizeText,
    getClosestPoints,
    baseSelection,
    getBBox,
    format,
    decorizeLine
} from "../../chart.bll";
import * as d3 from "d3";
import * as moment from "moment";
import { EventEmitter } from "@angular/core";
import { NewOptions, NewAxises } from "./indicator-detailed-chart.models";

export class IndicatorDetailedLinechart extends Chart {
    protected defaultDayBox: baseSelection = null;
    protected opts: NewOptions;
    protected items: Item[] = [];
    protected norms: Item[] = [];

    constructor(
        protected $element: JQuery,
        protected data: Item[],
        protected onDateBoxClicked: EventEmitter<number>,
        protected periodType: string,
        protected measurement: string
    ) {
        super($element, data);
    }

    protected preprocessData() {
        this.data.forEach(item => {
            if (item.name.toString().indexOf("norms") !== -1) {
                this.norms.push(item);
                item.title = item.name.toString().substr(0, 3);
            } else {
                this.items.push(item);
            }
        });

        if (this.norms.length > 1 && this.norms[0].title === "max") {
            this.norms.reverse();
        }

        const buf = this.data;
        this.data = this.items;
        super.preprocessData();
        this.data = buf;
    }

    protected initOptions() {
        // configure options
        this.opts = new NewOptions({
            width: 1365,
            height: 550,
            background_color: "#171820",
            margin: {
                left: 76,
                top: 100,
                right: 60,
                bottom: 50
            },
            grid: new Grid({
                color: "#222530",
                stroke_width: 1
            }),
            last_value: new LastValue({
                box: new Box({
                    arrow_width: 0,
                    text: new Text({
                        color: "#2D2D32",
                        size: 14,
                        font: "Tahoma"
                    })
                }),
                colorOfitem: true
            }),
            periodType: this.periodType as
                | "seconds"
                | "minutes"
                | "hours"
                | "days"
                | "months"
                | "years",
            labeledPointsConfig: new LabeledPointsConfig({
                text: new Text({
                    size: 14,
                    color: "white"
                })
            }),
            horizontalLinesConfig: new HorizontalLinesConfig({
                text: new Text({
                    color: "#E9E9E9",
                    size: 12,
                    font: "Tahoma"
                }),
                labelPadding: 5
            }),
            axises: new NewAxises()
        });

        this.data.forEach(item => {
            item.interpolation = d3.curveLinear;
        });
    }

    protected fillTicks() {
        // filling y axis ticks
        for (let i = 0; i <= this.opts.axises.y.ticks.quantity; i++) {
            this.ticks.y.push(i * this.extreems.interval.y);
        }

        // filling x axis ticks
        const values = this.items[0].values;
        if (this.items[0] && values && values.length) {
            for (let i = 0; i < values.length; i++) {
                if (
                    (i % 2 === 0 && values.length > 10) ||
                    values.length <= 10
                ) {
                    this.ticks.x.push(this.xScale(values[i].date));
                }
            }
            if ((values.length - 1) % 2 === 1 && values.length > 10) {
                this.ticks.x.pop();
                this.ticks.x.push(this.xScale(values[values.length - 1].date));
            }
        } else {
            this.ticks.x = [];
        }
    }

    protected drawLegends() {}

    protected drawTopXAxis() {
        const topAxisG = this.axises
            .append("g")
            .attr("class", "top-axis")
            .attr(
                "transform",
                `translate(0, ${this.opts.axises.xTop.topMargin -
                    this.opts.margin.top})`
            );

        topAxisG
            .append("rect")
            .attr("x", -this.opts.margin.left)
            .attr("height", this.opts.axises.xTop.height)
            .attr(
                "width",
                this.opts.margin.left + this.width + this.opts.margin.right
            )
            .style("fill", "#20222E");

        const primaryTicksG = topAxisG.append("g");
        const minPadding = 5;

        const ticks = this.ticks.x;
        if (ticks && ticks.length) {
            // draw primary ticks
            if (ticks.length > 1) {
                for (let i = 1; i < ticks.length - 1; i++) {
                    const tick = ticks[i];
                    primaryTicksG
                        .append("text")
                        .attr("class", `tick-${i}`)
                        .attr("x", tick)
                        .attr(
                            "y",
                            this.opts.axises.xTop.height / 2 +
                                this.opts.axises.xTop.tickText.size / 2
                        )
                        .attr("text-anchor", "middle")
                        .call(decorizeText, this.opts.axises.xTop.tickText)
                        .text(this.tickFormat(this.xScale.invert(tick)));
                }
            }

            // draw main yellow ticks
            const mainTicks = [ticks[0]];
            if (ticks.length > 1) {
                mainTicks.push(ticks[ticks.length - 1]);
            }
            mainTicks.forEach((tick, index) => {
                const text = topAxisG
                    .append("text")
                    .attr("class", `main-tick-${index + 1}`)
                    .attr("x", tick)
                    .attr(
                        "y",
                        this.opts.axises.xTop.height / 2 +
                            this.opts.axises.xTop.mainTickText.size / 2
                    )
                    .attr("text-anchor", "middle")
                    .call(decorizeText, this.opts.axises.xTop.mainTickText)
                    .text(this.mainTickFormat(this.xScale.invert(tick)));
            });

            // adjusting side ticks if overlapping with primary ticks
            if (ticks.length > 4) {
                const startTick = topAxisG.select(".main-tick-1");
                const beforeStartTick = topAxisG.select(".tick-1");
                if (startTick && beforeStartTick) {
                    const diff =
                        getBBox(startTick).width / 2 +
                        getBBox(beforeStartTick).width / 2 +
                        minPadding -
                        (ticks[1] - ticks[0]);

                    if (diff > 0) {
                        startTick.attr("x", Number(startTick.attr("x")) - diff);
                    }
                }

                const endTick = topAxisG.select(".main-tick-2");
                const beforeEndTick = topAxisG.select(
                    `.tick-${ticks.length - 2}`
                );
                if (endTick && beforeEndTick) {
                    const diff =
                        getBBox(endTick).width / 2 +
                        getBBox(beforeEndTick).width / 2 +
                        minPadding -
                        (ticks[ticks.length - 1] - ticks[ticks.length - 2]);

                    if (diff > 0) {
                        endTick.attr("x", Number(endTick.attr("x")) + diff);
                    }
                }
            }
        }
    }

    protected tickFormat(date: Date): string {
        switch (this.opts.periodType) {
            case "minutes": {
                return moment(date).format("mm");
            }
            case "hours": {
                return moment(date).format("HH:00");
            }
            case "days": {
                return moment(date).format("DD");
            }
            case "months": {
                return moment(date).format("MMM");
            }
            case "years": {
                return moment(date).format("YYYY");
            }
            default:
                return moment(date).format("mm");
        }
    }

    protected mainTickFormat(date: Date): string {
        switch (this.opts.periodType) {
            case "minutes": {
                return moment(date).format("HH:mm");
            }
            case "hours": {
                return moment(date).format("DD.MMM HH:00");
            }
            case "days": {
                return moment(date).format("DD MMM");
            }
            case "months": {
                return moment(date).format("MMM YYYY");
            }
            case "years": {
                return moment(date).format("YYYY");
            }
            default:
                return moment(date).format("mm");
        }
    }

    protected drawXAxis() {
        this.drawTopXAxis();

        // draw bottom x axis
        const bottomAxisG = this.axisX.append("g").attr("class", "bottom-axis");
        bottomAxisG
            .append("rect")
            .attr("x", -this.opts.margin.left)
            .attr(
                "width",
                this.opts.margin.left + this.width + this.opts.margin.right
            )
            .attr("height", this.opts.axises.x.height)
            .style("fill", "#20222E");

        if (
            this.items[0] &&
            this.items[0].values &&
            this.items[0].values.length
        ) {
            const ticks = this.items[0].values.length;

            const dayBoxesG = bottomAxisG
                .append("g")
                .attr("class", "day-boxes-group")
                .attr(
                    "transform",
                    `translate(0, ${this.opts.axises.x.padding})`
                );

            const tickWidth = ticks > 1 ? this.width / (ticks - 1) : this.width; // -1 cuz 2 half boxes on each side forms one extra box
            const padding = tickWidth > 1 ? 1 : tickWidth / 5;

            const self = this;
            let tick = 0;
            let previousDayBox: baseSelection = null;
            for (let i = 0; i < ticks; i++) {
                tick = this.xScale(this.items[0].values[i].date);
                const leftSide =
                    i === 0
                        ? 0
                        : (tick -
                              this.xScale(this.items[0].values[i - 1].date)) /
                              2 -
                          padding / 2;
                const rightSide =
                    i === ticks - 1
                        ? 0
                        : (this.xScale(this.items[0].values[i + 1].date) -
                              tick) /
                              2 -
                          padding / 2;

                const deviated = this.isDeviated(i);

                const dayBox = dayBoxesG
                    .append("rect")
                    .datum({ tick: tick, index: i })
                    .attr("x", ticks > 1 ? tick - leftSide : tick + padding / 2)
                    .attr("width", leftSide + rightSide)
                    .attr(
                        "height",
                        this.opts.axises.x.height -
                            2 * this.opts.axises.x.padding
                    )
                    .style("fill", deviated ? "#7B2C3D" : "#3A3F4F")
                    .attr("class", "day-box")
                    .on("mouseover", function() {
                        d3.select(this).style("opacity", 0.8);
                    })
                    .on("mouseout", function() {
                        d3.select(this).style("opacity", 1);
                    })
                    .on("mousedown", function() {
                        d3.select(this).style("opacity", 0.4);
                    })
                    .on("mouseup", function(t) {
                        d3.select(this).style("opacity", 0.8);
                        if (self.onDateBoxClicked) {
                            self.onDateBoxClicked.next(t.index);
                        }
                        previousDayBox = self.moveTooltip(
                            t.tick,
                            d3.select(this),
                            previousDayBox
                        );
                    });
                // emit first day activation
                if (i === 0) {
                    this.defaultDayBox = dayBox;
                    previousDayBox = dayBox;
                }
            }
        }
    }

    protected isDeviated(index: number): boolean {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const point = this.items[i].values[index];
            for (let j = 0; j < this.norms.length; j++) {
                const norm = this.norms[j];
                const matchedPoint = this.getMatchedNormPoint(point.date, norm);
                if (
                    matchedPoint &&
                    !_.isNil(point.value) &&
                    ((norm.title === "max" &&
                        point.value > matchedPoint.value) ||
                        (norm.title === "min" &&
                            point.value < matchedPoint.value))
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    protected getMatchedNormPoint(date: Date, norm: Item): Point {
        return _(norm.values).find((p, ind) => {
            const next = norm.values[ind + 1];

            return (
                date.getTime() >= p.date.getTime() &&
                ((next && date.getTime() < next.date.getTime()) ||
                    ind === norm.values.length - 1)
            );
        });
    }

    protected drawTooltip() {
        this.tooltip = this.body
            .append<SVGGElement>("g")
            .attr("class", "tooltip");

        this.tooltip
            .append<SVGLineElement>("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", this.height + 5)
            .style("stroke", "#297ECC");

        this.tooltip
            .append("rect")
            .attr("class", "tooltip-date-box")
            .attr("y", -this.opts.axises.xTop.height)
            .attr("height", this.opts.tooltip.dateBox.height)
            .style("fill", "#297ECC");

        this.tooltip
            .append("text")
            .attr("class", "tooltip-date")
            .attr("text-anchor", "middle")
            .attr(
                "y",
                -this.opts.tooltip.dateBox.height / 2 +
                    this.opts.tooltip.dateBox.text.size / 2
            )
            .call(decorizeText, this.opts.tooltip.dateBox.text);

        this.tooltip
            .append("polygon")
            .attr("class", "tooltip-pointer")
            .attr("points", "5.5,7 0.5,0 10.5,0")
            .attr(
                "transform",
                `translate(-5, -${this.opts.tooltip.dateBox.height +
                    this.opts.tooltip.margin})`
            )
            .style("fill", "white");

        this.tooltip
            .append("g")
            .attr(
                "transform",
                `translate(0.5, -${this.opts.tooltip.dateBox.height +
                    this.opts.tooltip.margin})`
            )
            .append("g")
            .attr("class", "values-group");
    }

    protected moveTooltip(
        tick: number,
        currentDayBox: baseSelection,
        previousDayBox: baseSelection
    ): baseSelection {
        if (previousDayBox) {
            previousDayBox.style("stroke", "none");
        }
        this.tooltip.style("display", "none");

        this.tooltip.attr("transform", `translate(${tick}, 0)`);

        const date = this.xScale.invert(tick);
        console.log(date);

        // draw date
        const dateBoxText = this.tooltip.select(".tooltip-date");
        const dateBoxRect = this.tooltip.select(".tooltip-date-box");

        dateBoxText.text(
            tick === 0 || tick === this.width
                ? this.mainTickFormat(date)
                : this.tickFormat(date)
        );
        dateBoxRect
            .attr(
                "x",
                -getBBox(dateBoxText).width / 2 -
                    this.opts.tooltip.dateBox.padding
            )
            .attr(
                "width",
                getBBox(dateBoxText).width +
                    this.opts.tooltip.dateBox.padding * 2
            );

        // draw values group
        // draw values
        let points: PointParented[] = getClosestPoints(date, this.allPoints);

        const valuesG = this.tooltip.select(".values-group");
        valuesG.html("");

        points = points.filter(p => !p.item.name.toString().includes("norms"));
        points.sort((a, b) => a.value - b.value);
        const notAlone = points.length > 1;
        let currentPosition = 0;
        const margin = 1;

        points.forEach(point => {
            if (point.value) {
                const valueG = valuesG
                    .append("g")
                    .attr("transform", `translate(${currentPosition}, 0)`)
                    .attr("class", `point-value-${point.item.name}`);

                const rect = valueG
                    .append("rect")
                    .attr("y", -this.opts.tooltip.height)
                    .attr("height", this.opts.tooltip.height)
                    .style("fill", "#297ECC");

                const nameText = valueG
                    .append("text")
                    .attr("x", this.opts.tooltip.padding)
                    .attr(
                        "y",
                        this.opts.tooltip.fontSize / 2 -
                            this.opts.tooltip.height / 2
                    )
                    .call(
                        decorizeText,
                        new Text({
                            size: this.opts.tooltip.fontSize
                        })
                    )
                    .text(`${notAlone ? point.item.name : ""}`);

                const valueText = valueG
                    .append("text")
                    .attr(
                        "x",
                        this.opts.tooltip.padding * 2 + getBBox(nameText).width
                    ) // including 1 space
                    .attr(
                        "y",
                        this.opts.tooltip.fontSize / 2 -
                            this.opts.tooltip.height / 2
                    )
                    .call(
                        decorizeText,
                        new Text({
                            font: "Tahoma",
                            size: this.opts.tooltip.fontSize
                        })
                    )
                    .text(format(point.value, 2));

                rect.attr(
                    "width",
                    getBBox(nameText).width +
                        getBBox(valueText).width +
                        3 * this.opts.tooltip.padding
                ); // including 1 space

                currentPosition += getBBox(valueG).width + margin;
            }
        });

        // draw deviations
        const padding = 16.5;
        points.forEach(point => {
            const deviation = this.getDeviation(point);

            if (deviation !== "") {
                const deviationG = valuesG
                    .append("g")
                    .attr("transform", `translate(${currentPosition}, 0)`);

                const rect = deviationG
                    .append("rect")
                    .attr("y", -this.opts.tooltip.height)
                    .attr("height", this.opts.tooltip.height)
                    .style("fill", "#DBDCDE");

                const text = deviationG
                    .append("text")
                    .attr("x", padding)
                    .attr(
                        "y",
                        this.opts.tooltip.fontSize / 2 -
                            this.opts.tooltip.height / 2
                    )
                    .call(
                        decorizeText,
                        new Text({
                            color: "#B21634",
                            font: "Tahoma",
                            size: this.opts.tooltip.fontSize
                        })
                    )
                    .text(format(deviation, 2));

                rect.attr("width", getBBox(text).width + padding * 2);

                currentPosition += getBBox(deviationG).width + margin;
            }
        });

        // draw norms
        if (this.norms.length) {
            const normalsG = valuesG
                .append("g")
                .attr("transform", `translate(${currentPosition}, 0)`);

            let normalsText = "";

            if (this.norms.length > 1) {
                const min = this.getMatchedNormPoint(date, this.norms[0]);
                const max = this.getMatchedNormPoint(date, this.norms[1]);
                normalsText =
                    min && max
                        ? `${format(min.value, 2)} — ${format(max.value, 2)}`
                        : "";
            } else {
                const normPoint = this.getMatchedNormPoint(date, this.norms[0]);
                normalsText = normPoint ? format(normPoint.value, 2) : "";
            }

            if (normalsText !== "") {
                const rect = normalsG
                    .append("rect")
                    .attr("y", -this.opts.tooltip.height)
                    .attr("height", this.opts.tooltip.height)
                    .style("fill", "#DBDCDE");

                const text = normalsG
                    .append("text")
                    .attr("x", this.opts.tooltip.padding)
                    .attr(
                        "y",
                        this.opts.tooltip.fontSize / 2 -
                            this.opts.tooltip.height / 2
                    )
                    .call(
                        decorizeText,
                        new Text({
                            color: "black",
                            font: "Tahoma",
                            size: this.opts.tooltip.fontSize
                        })
                    )
                    .text(normalsText);

                rect.attr(
                    "width",
                    getBBox(text).width + this.opts.tooltip.padding * 2
                );
            }
        }

        // adjusting to middle
        const differenceLeft =
            tick - getBBox(valuesG).width / 2 + this.opts.margin.left;
        const differenceRight =
            this.width -
            tick +
            this.opts.margin.right -
            getBBox(valuesG).width / 2;
        if (differenceLeft < 0) {
            valuesG.attr(
                "transform",
                `translate(-${this.opts.margin.left +
                    tick -
                    this.opts.tooltip.padding * 2}, 0)`
            );
        } else if (differenceRight < 0) {
            valuesG.attr(
                "transform",
                `translate(-${getBBox(valuesG).width / 2 -
                    differenceRight +
                    this.opts.tooltip.padding * 2}, 0)`
            );
        } else {
            valuesG.attr(
                "transform",
                `translate(-${getBBox(valuesG).width / 2}, 0)`
            );
        }

        if (currentDayBox) {
            currentDayBox.style("stroke", "#297ECC");
        }

        this.tooltip.style("display", "block");
        if (getBBox(valuesG).width > 0) {
            this.tooltip.select(".tooltip-pointer").style("display", "block");
        } else {
            this.tooltip.select(".tooltip-pointer").style("display", "none");
        }

        return currentDayBox;
    }

    protected getDeviation(point: Point): string {
        if (!this.norms.length || _.isNil(point.value)) {
            return "";
        }

        for (let i = 0; i < this.norms.length; i++) {
            const norm = this.norms[i];
            if (norm.name.toString().includes("max")) {
                const maxPoint = this.getMatchedNormPoint(point.date, norm);
                if (maxPoint && point.value > maxPoint.value) {
                    return format(point.value - maxPoint.value, 2);
                }
            }
            if (norm.name.toString().includes("min")) {
                const minPoint = this.getMatchedNormPoint(point.date, norm);
                if (minPoint && point.value < minPoint.value) {
                    return format(point.value - minPoint.value, 2);
                }
            }
        }

        return "—";
    }

    protected postprocessData() {
        super.postprocessData();
        this.moveTooltip(0, this.defaultDayBox, null);
    }

    public draw() {
        super.draw();
        this.drawSideMargins();
        this.drawMeasurementUnits();
    }

    protected drawSideMargins() {
        // left margin
        this.background
            .append("rect")
            .attr("width", 6)
            .attr(
                "height",
                this.opts.margin.top + this.height + this.opts.margin.bottom
            )
            .style("fill", "#20222E");

        // right margin
        this.background
            .append("rect")
            .attr(
                "x",
                this.opts.margin.left + this.width + this.opts.margin.right - 6
            )
            .attr("width", 6)
            .attr(
                "height",
                this.opts.margin.top + this.height + this.opts.margin.bottom
            )
            .style("fill", "#20222E");
    }

    protected fillLabeledPointsList(value: Point, color: string) {
        if (value.labeled) {
            value.labeled.color = "#E61C2C";
            this.labeledPoints.push(value);
        }
    }

    protected drawLabeledPoints() {
        this.labeledPoints.forEach(point => {
            const labelG = this.labeledPointsG
                .append<SVGGElement>("g")
                .attr("class", "label" + moment(point.date).format("mm"))
                .attr(
                    "transform",
                    `translate(${this.xScale(point.date)}, ${this.yScale(
                        point.value
                    )})`
                );

            const label = point.labeled.labels[0]; // in this case will be only one label

            let padding = 6;
            // add surrounding box
            const rect = labelG
                .append("rect")
                .attr(
                    "y",
                    point.labeled.on === "above"
                        ? -(2 * padding + 24)
                        : 2 * padding
                )
                .attr("height", 24)
                .style("stroke", "black")
                .style("stroke-width", 0.2)
                .style("fill", "#E61C2C");

            padding = 6.5;
            // add pointing arrow
            const arrowG = labelG.append("g");
            if (point.labeled.on === "above") {
                arrowG.attr("transform", `translate(0, -${padding})`);

                arrowG
                    .append("polygon")
                    .attr("points", "0,0 6,-7 0,-7")
                    .style("fill", "#E61C2C");

                arrowG
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", 6)
                    .attr("y1", 0)
                    .attr("y2", -6)
                    .call(
                        decorizeLine,
                        new Line({
                            stroke: "black",
                            strokeWidth: 0.2
                        })
                    );

                arrowG
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", 0)
                    .attr("y1", 0)
                    .attr("y2", -6)
                    .call(
                        decorizeLine,
                        new Line({
                            stroke: "black",
                            strokeWidth: 0.2
                        })
                    );
            } else {
                arrowG.attr("transform", `translate(0, ${padding})`);

                arrowG
                    .append("polygon")
                    .attr("points", "6,7 0,7 0,0")
                    .style("fill", "#E61C2C");

                arrowG
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", 6)
                    .attr("y1", 0)
                    .attr("y2", 6)
                    .call(
                        decorizeLine,
                        new Line({
                            stroke: "black",
                            strokeWidth: 0.2
                        })
                    );

                arrowG
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", 0)
                    .attr("y1", 0)
                    .attr("y2", 6)
                    .call(
                        decorizeLine,
                        new Line({
                            stroke: "black",
                            strokeWidth: 0.2
                        })
                    );
            }

            // add text
            const text = labelG
                .append<SVGTextElement>("text")
                .attr("x", padding)
                .attr("y", point.labeled.on === "above" ? "-18px" : "30px")
                .call(decorizeText, this.opts.labeledPointsConfig.text)
                .style("cursor", "default")
                .text(format(label, 2));

            rect.attr("width", getBBox(text).width + 2 * padding);

            // organize shaffling
            const labelNode = $(labelG.node());
            let nextNode: JQuery<HTMLElement> = null;
            let detachedNode: JQuery<HTMLElement> = null;
            labelNode
                .on("mouseenter", () => {
                    nextNode = labelNode.next();
                    if (nextNode) {
                        detachedNode = labelNode.detach();
                        $(this.labeledPointsG.node()).append(labelNode);
                    }
                })
                .on("mouseleave", () => {
                    if (nextNode) {
                        nextNode.before(detachedNode);
                    }
                });
        });
    }

    protected drawMeasurementUnits() {
        this.axises.select(".tick-text:nth-of-type(1)").remove();
        this.body
            .append("text")
            .attr("text-anchor", "end")
            .attr("x", -2)
            .call(decorizeText, this.opts.measurementUnitText)
            .text(this.measurement);
    }
}
