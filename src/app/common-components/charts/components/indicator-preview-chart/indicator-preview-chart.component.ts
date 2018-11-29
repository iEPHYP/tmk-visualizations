import {
    Component,
    Input,
    ElementRef,
    Output,
    EventEmitter
} from "@angular/core";
import {
    Item,
    Point,
    Labeled,
    OnLineCross,
    Fill
} from "../../chart.models";
import * as _ from "lodash";
import { BaseClassChartComponent } from "../chart-component.base-class";
import { IndicatorPreviewLinechart } from "./indicator-preview-chart.linechart";

@Component({
    selector: "tmk-indicator-preview-chart",
    templateUrl: "./indicator-preview-chart.component.html",
    styleUrls: ["./indicator-preview-chart.component.scss"]
})
export class IndicatorPreviewChartComponent extends BaseClassChartComponent {
    @Input() title: string;
    @Input() isNormal: boolean;
    @Input() measurement: string = "м3/ч";
    @Input() periodType: string = "days";
    @Output() onChartClicked: EventEmitter<{}> = new EventEmitter<{}>();

    constructor(protected element: ElementRef) {
        super(element);
    }

    protected initLinechart() {
        this.linechart = new IndicatorPreviewLinechart(
            $(this.element.nativeElement).find(".chart-body"),
            _(this.data).cloneDeep(),
            this.periodType,
            this.measurement,
            this.onChartClicked
        );
    }

    protected fillEmptySpace() {
        const maxPoint: { point: Point; value: number } = {
            point: null,
            value: 900
        };
        const minPoint: { point: Point; value: number } = {
            point: null,
            value: 1200
        };
        const date = new Date(2017, 0, 1, 0, 0, 0, 0);
        let d;
        if (!this.data) {
            const values1: Point[] = [];
            const values2: Point[] = [];
            for (let i = 0; i <= 30; i++) {
                d = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
                let point = new Point({
                    date: d,
                    value: Math.round(900 + Math.random() * 300)
                });
                if (!(i > 13 && i < 17)) {
                    values1.push(point);
                }
                if (point.value > maxPoint.value) {
                    maxPoint.point = point;
                    maxPoint.value = point.value;
                }
                if (point.value < minPoint.value) {
                    minPoint.point = point;
                    minPoint.value = point.value;
                }

                point = new Point({
                    date: d,
                    value: Math.round(900 + Math.random() * 300)
                });
                values2.push(point);
                if (point.value > maxPoint.value) {
                    maxPoint.point = point;
                    maxPoint.value = point.value;
                }
                if (point.value < minPoint.value) {
                    minPoint.point = point;
                    minPoint.value = point.value;
                }
            }

            maxPoint.point.labeled = new Labeled({
                labels: [maxPoint.value.toString()],
                on: "above"
            });

            minPoint.point.labeled = new Labeled({
                labels: [minPoint.value.toString()],
                on: "below"
            });

            this.data = [
                new Item({
                    name: "max",
                    title: "max",
                    color: "#4BE08E",
                    stroke_width: 2,
                    circle: null,
                    values: values1,
                    onLineCrosses: [
                        new OnLineCross({
                            accordingTo: "max-norms",
                            fill: new Fill({
                                color: "red",
                                on: "above"
                            })
                        }),
                        new OnLineCross({
                            accordingTo: "min-norms",
                            fill: new Fill({
                                color: "red",
                                on: "below"
                            })
                        })
                    ]
                }),
                new Item({
                    name: "min",
                    title: "min",
                    color: "#4BE08E",
                    stroke_width: 2,
                    circle: null,
                    values: values2,
                    onLineCrosses: [
                        new OnLineCross({
                            accordingTo: "max-norms",
                            fill: new Fill({
                                color: "red",
                                on: "above"
                            })
                        }),
                        new OnLineCross({
                            accordingTo: "min-norms",
                            fill: new Fill({
                                color: "red",
                                on: "below"
                            })
                        })
                    ]
                }),
                new Item({
                    name: "max-norms",
                    color: "#4b5160",
                    dashed: true,
                    dash_array: "5, 5",
                    stroke_width: 1,
                    circle: null,
                    values: [
                        new Point({
                            date: new Date(
                                date.getTime() + 0 * 24 * 60 * 60 * 1000
                            ),
                            value: 1150
                        }),
                        new Point({
                            date: new Date(
                                date.getTime() + 10 * 24 * 60 * 60 * 1000
                            ),
                            value: 1150
                        }),
                        new Point({
                            date: new Date(
                                date.getTime() + 10 * 24 * 60 * 60 * 1000
                            ),
                            value: 1025
                        }),
                        new Point({
                            date: new Date(
                                date.getTime() + 20 * 24 * 60 * 60 * 1000
                            ),
                            value: 1025
                        })
                    ]
                }),
                new Item({
                    name: "min-norms",
                    color: "#4b5160",
                    dashed: true,
                    dash_array: "5, 5",
                    stroke_width: 1,
                    circle: null,
                    values: [
                        new Point({
                            date: new Date(
                                date.getTime() + 0 * 24 * 60 * 60 * 1000
                            ),
                            value: 950
                        }),
                        new Point({
                            date: new Date(
                                date.getTime() + 15 * 24 * 60 * 60 * 1000
                            ),
                            value: 950
                        })
                    ]
                })
            ];
        }
    }
}
