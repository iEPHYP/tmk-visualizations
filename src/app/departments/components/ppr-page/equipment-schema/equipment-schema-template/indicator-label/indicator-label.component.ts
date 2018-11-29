import { Component, OnInit, Input, EventEmitter, Output, Optional } from '@angular/core';
import * as acc from 'accounting';
import { Indicator } from './indicator-label.models';
import { EquipmentSchemaBaseClass } from '../../equipment-schema.base-class';

@Component({
    selector: 'g[tmk-indicator-label]',
    templateUrl: './indicator-label.component.html',
    styleUrls: ['./indicator-label.component.scss']
})
export class IndicatorLabelComponent implements OnInit {

    @Input() label: Indicator;
    @Input() side: 'left' | 'right' = 'left';
    @Input() titleWidth: number;
    @Output() onClicked = new EventEmitter<Indicator>();

    constructor(@Optional() public mnemoscheme: EquipmentSchemaBaseClass) { }

    ngOnInit() { }

    public get left(): boolean {
        return this.side === 'left';
    }

    public get warned(): boolean {
        return this.status !== 'normal';
    }

    public get lineColor(): string {
        if (this.status === 'normal') {
            return '#21B149';
        } else {
            return '#EA2F2F';
        }
    }

    public edgeColor(edge: 'left' | 'right'): string {
        if (this.status === 'normal') {
            return '#CDD0D3';
        } else if (this.label.percentage < 0) {
            return edge === 'left' ? '#EA2F2F' : '#CDD0D3';
        } else if (this.label.percentage > 100) {
            return edge === 'left' ? '#CDD0D3' : '#EA2F2F';
        }
    }

    public get status(): 'normal' | 'critical' {
        if (this.label.value === undefined || this.label.value == null || this.label.percentage >= 0 && this.label.percentage <= 100) {
            return 'normal';
        } else {
            return 'critical';
        }
    }

    public get statusWidth(): number {
        if (this.label.percentage == null || this.label.percentage <= 0) {
            return this.left ? 101 : 0;
        } else if (this.label.percentage >= 100) {
            return this.left ? 0 : 101;
        } else {
            const width = 101 * this.label.percentage / 100;
            return this.left ? 101 - width : width;
        }
    }

    public format(value: number): string {
        if (value === undefined || value == null) {
            return '-';
        } else {
            return acc.formatNumber(value, 2, ' ');
        }
    }

    public translate(label: Indicator): string {
        return `translate(${label.translate.x}px, ${label.translate.y}px)`;
    }

    public statusClicked() {
    }
}
