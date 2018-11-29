import { IndicatorDetailedLinechart } from "../indicator-detailed-chart/indicator-detailed-chart.linechart";
import { Item, Margin, Axis, Ticks, Text } from "../../chart.models";
import {
    NewOptions,
    TopAxis,
    NewAxises,
    BottomAxis,
    NewTooltip,
    DateBox
} from "../indicator-detailed-chart/indicator-detailed-chart.models";
import { EventEmitter } from "@angular/core";

export class IndicatorPreviewLinechart extends IndicatorDetailedLinechart {
    constructor(
        protected $element: JQuery,
        protected data: Item[],
        protected periodType: string,
        protected measurement: string,
        protected onChartClicked: EventEmitter<{}>
    ) {
        super($element, data, null, periodType, measurement);
    }

    protected drawLabeledPoints() {}

    protected initOptions() {
        super.initOptions();
        this.opts = new NewOptions(this.opts, {
            width: 502,
            height: 300,
            margin: new Margin({
                left: 50,
                top: 60,
                right: 50,
                bottom: 30
            }),
            axises: new NewAxises({
                y: new Axis({
                    arrow: { has: false },
                    color: "#333748",
                    ticks: new Ticks({
                        length: 0,
                        quantity: 9,
                        color: "#333748",
                        text: {
                            color: "#767B91",
                            size: 10,
                            font: "Roboto-Regular"
                        }
                    })
                }),
                x: new BottomAxis({
                    height: 30
                }),
                xTop: new TopAxis({
                    topMargin: 30,
                    height: 30,
                    tickText: new Text({
                        color: "#8D92A7",
                        size: 10
                    }),
                    mainTickText: new Text({
                        color: "#FFDE55",
                        size: 10
                    })
                })
            }),
            tooltip: new NewTooltip({
                dateBox: new DateBox({
                    height: 30,
                    text: new Text({
                        size: 10
                    }),
                    padding: 9.5
                }),
                height: 20,
                fontSize: 12
            }),
            measurementUnitText: new Text({
                size: 8,
                font: "Roboto-Bold"
            })
        });
    }

    protected initMarkup() {
        super.initMarkup();
        this.body
            .append("rect")
            .attr("opacity", 0.1)
            .attr("width", this.width + this.opts.margin.right)
            .attr("height", this.height)
            .on("mouseup", () => {
                this.onChartClicked.next();
            });
    }
}
