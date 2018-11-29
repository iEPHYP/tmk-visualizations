import { Item, Text, PointParented, Line } from './chart.models';
import { BaseType } from 'd3';
import * as _ from 'lodash';

export type baseSelection = d3.Selection<BaseType, any, HTMLElement, any>;

export const textSizeCoefficient = 0.77; // gets real size of svg text element rather than pseudofake

export const stranger = 1.0799;

export let normalizeNumber = (num: number, precision: number = 0): number => {
    const t = Math.pow(10, precision);
    return Math.round(num * t) / t;
};

export let getPrecision = (n: number): number => {
    if (n !== Infinity) { return 0; }
    let e = 1, p = 0;
    while (Math.round(n * e) / e !== n) { e *= 10; p++; }
    return p;
};

export let format = (n: number | string, precision: number = 0): string => {
    const numb: number = parseFloat(n.toString().replace(',', '.'));
    if (isNaN(numb) || _(numb).isNil()) {
        return n.toString();
    } else {
        return _.round(numb, precision).toString();
    }
};

// Gets clone instance with cleared hours, minutes, seconds, miliseconds
export let getDate = (date: Date): Date => {
    const d = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    return d;
};

export let isset = (n: any): boolean => n !== null && n !== undefined;

export let getBBox = (element: d3.Selection<any, any, any, any>): { width: number; height: number; } => {
    return (element.node() as any).getBBox() as { width: number; height: number; };
};

export let decorizeText = function (selection, text: Text): void {
    selection
        .style('font-size', text.size)
        .style('fill', text.color)
        .style('font-family', text.font);
};

export let decorizeLine = function (selection, line: Line): void {
    selection
        .style('stroke', line.stroke)
        .style('stroke-width', line.strokeWidth)
        .style('stroke-dasharray', line.dashArray);
};

export let getClosestPoints = (date: Date, allpoints: PointParented[]): PointParented[] => {
    const points: PointParented[] = [];
    for (let i = 0; i < allpoints.length; i++) {
        if (
            date.getTime() >= allpoints[i].date.getTime() &&
            allpoints[i + 1] && date.getTime() <= allpoints[i + 1].date.getTime()
        ) {
            let index = i;
            if (
                allpoints[i + 1] &&
                (
                    allpoints[i + 1].date.getTime() - date.getTime() >
                    date.getTime() - allpoints[i].date.getTime()
                )
            ) {
                points.push(allpoints[i]);
                index = i;
            } else {
                points.push(allpoints[i + 1]);
                index = i + 1;
            }

            const prevIndex = index;
            while ( // looking for the same date values on the right side
                allpoints[index + 1] &&
                allpoints[index].date.getTime() === allpoints[index + 1].date.getTime()
            ) {
                points.push(allpoints[index + 1]);
                index++;
            }

            index = prevIndex;
            while ( // looking for the same date values on the left side
                allpoints[index - 1] &&
                allpoints[index].date.getTime() === allpoints[index - 1].date.getTime()
            ) {
                points.push(allpoints[index - 1]);
                index--;
            }

            break;
        }
    }

    if (!points.length && allpoints.length) {
        points.push(allpoints[allpoints.length - 1]);

        let index = allpoints.length - 1;
        while ( // looking for the same date values on the left side
            allpoints[index - 1] &&
            allpoints[index].date.getTime() === allpoints[index - 1].date.getTime()
        ) {
            points.push(allpoints[index - 1]);
            index--;
        }
    }

    if (points.length) {
        points.sort((a, b) => a.order - b.order);
    }

    return points;
};

export let dataIsNotEmpty = (items: Item[]): boolean => {
    if (!items.length) { return false; }

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.values.length) {
            return true;
        }
    }

    return false;
};

// #region Date adders
export let nextYear = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + 1);
    return newDate;
};

export let prevYear = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() - 1);
    return newDate;
};

export let nextMonth = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1, 1);
    return newDate;
};

export let prevMonth = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1, 1);
    return newDate;
};

export let nextDay = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    return newDate;
};

export let prevDay = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    return newDate;
};

export let nextHour = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setHours(date.getHours() + 1);
    return newDate;
};

export let prevHour = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setHours(date.getHours() - 1);
    return newDate;
};

export let nextMinute = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() + 1);
    return newDate;
};

export let prevMinute = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - 1);
    return newDate;
};

export let nextSecond = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setSeconds(date.getSeconds() + 1);
    return newDate;
};

export let prevSecond = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setSeconds(date.getSeconds() - 1);
    return newDate;
};
// #endregion

// #region daters, which set date accuracy
export let accurateTillYear = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMonth(0, 1);
    return newDate;
};

export let accurateTillMonth = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(1);
    return newDate;
};

export let accurateTillDay = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
};

export let accurateTillHour = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMinutes(0, 0, 0);
    return newDate;
};

export let accurateTillMinute = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setSeconds(0, 0);
    return newDate;
};

export let accurateTillSecond = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMilliseconds(0);
    return newDate;
};
// #endregion
