import { Component, OnInit, Input, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as acc from 'accounting';
import * as d3 from 'd3';

export abstract class TextWrapperClass {

    protected abstract get items(): { id: number | string; title: string; maxWidth?: number }[];

    protected max_label_width = 240;
    protected textSelector = '';
    protected emMultiplier: number;
    protected xAlign: number;

    protected wrapper = (item: Element) => {
        const label = d3.select(item);
        const text = label.select<SVGTextElement>(this.textSelector);
        const id = Number.parseInt(text.attr('data-id'));
        const data = this.items.find(i => Number.parseInt(<string>i.id) === id);

        if (data) {
            const content = data.title;
            text.text('');

            this.addTspan(
                text, item, content,
                data.maxWidth ? data.maxWidth : this.max_label_width,
                data.maxWidth ? data.maxWidth / 2 : this.xAlign,
                1);

            this.adjustVertically(label);
        }
    }

    protected addTspan(
        text: d3.Selection<SVGTextElement, {}, null, undefined>,
        label: any, content: string, maxWidth: number, startPoint: number, count: number
    ) {
        const adjustLine = () => {
            if (this.width(label) > maxWidth) {
                const words = content.split(' ');

                const lastWord = words[words.length - 1];
                if (words.length > 1) {
                    content = content.substring(0, content.length - lastWord.length - 1);
                    tspan.text(content);
                    ending = lastWord + (ending.length ? ' ' : '') + ending;
                    adjustLine();
                }
            }
        };

        let tspan: d3.Selection<SVGTSpanElement, {}, null, undefined> = null;
        let ending = '';
        if (content !== '') {
            tspan = text.append<SVGTSpanElement>('tspan')
                .attr('y', `${count * this.emMultiplier}em`)
                .attr('x', startPoint)
                .text(content);

            adjustLine();

            if (ending !== '') { this.addTspan(text, label, ending, maxWidth, startPoint, ++count); }
        }
    }

    protected abstract adjustVertically(label: d3.Selection<Element, {}, null, undefined>);

    public width(element: any): number {
        return element.getBoundingClientRect().width;
    }

    public height(element: any): number {
        return element.getBoundingClientRect().height;
    }

    public format(value: number | Date): string {
        if (value instanceof Date) {
            const date = <Date>value;
            return `${date.getHours()}:${date.getMinutes()}`;
        } else {
            if (value) {
                return acc.formatNumber(value, 2, ' ');
            } else {
                return '-';
            }
        }
    }

}
