import {  OnInit, Input, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Item, Point, Labeled } from '../chart.models';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

export abstract class BaseClassChartComponent implements OnInit, OnChanges, OnDestroy {

    @Input() data: Item[];

    protected $element: JQuery;
    protected timer: Subscription;
    protected linechart;

    constructor(protected element: ElementRef) {
        this.$element = $(this.element.nativeElement);
    }

    ngOnInit() {
        this.draw();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.draw();
    }

    public draw() {
        this.fillEmptySpace();

        this.initLinechart();

        if (this.timer) { this.timer.unsubscribe(); }
        this.timer = this.linechart.timer;

        this.linechart.draw();
    }

    protected abstract initLinechart();

    protected fillEmptySpace() {
        const maxPoint: { point: Point; value: number } = { point: null, value: 900 };
        const minPoint: { point: Point; value: number } = { point: null, value: 1200 };
        if (!this.data) {
            const values1: Point[] = [];
            const values2: Point[] = [];
            let date = new Date(2017, 11, 1, 0, 0, 0, 0);
            for (let i = 0; i <= 30; i++) {
                const d = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);

                const point = new Point({
                    date: d,
                    value: 900 + Math.random() * 300
                });
                values1.push(point);
                if (point.value > maxPoint.value) {
                    maxPoint.point = point;
                    maxPoint.value = point.value;
                }
            }

            date = new Date(2018, 0, 1, 0, 0, 0, 0);
            for (let i = 0; i <= 30; i++) {
                const d = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);

                const point = new Point({
                    date: d,
                    value: 900 + Math.random() * 300
                });
                values1.push(point);
                if (point.value > maxPoint.value) {
                    maxPoint.point = point;
                    maxPoint.value = point.value;
                }
            }

            maxPoint.point.labeled = new Labeled({
                labels: [maxPoint.value.toString()],
                on: 'above',
                color: '#94ED5A'
            });

            this.data = [
                new Item({
                    name: 'main',
                    title: 'Main',
                    color: '#94ED5A',
                    values: values1
                }),
                // new Item({
                //     name: 'manual',
                //     title: 'Manual',
                //     color: '#8ACDFF',
                //     interpolation: d3.curveLinear,
                //     values: values2
                // })
            ];
        }

    }

    ngOnDestroy(): void {
        if (this.timer) { this.timer.unsubscribe(); }
    }
}
