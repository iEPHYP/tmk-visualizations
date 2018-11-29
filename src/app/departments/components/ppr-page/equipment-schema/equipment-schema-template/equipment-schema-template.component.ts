import { Component, OnInit, Input, Optional } from '@angular/core';
import { Indicator } from './indicator-label/indicator-label.models';
import { Zone } from './zone/zone.models';
import { EquipmentSchemaBaseClass } from '../equipment-schema.base-class';

@Component({
    selector: 'g[tmk-equipment-schema-template]',
    templateUrl: './equipment-schema-template.component.html',
    styleUrls: ['./equipment-schema-template.component.scss']
})
export class EquipmentSchemaTemplateComponent implements OnInit {

    @Input() leftLabels: Indicator[] = [];
    @Input() rightLabels: Indicator[] = [];
    @Input() frames = [];
    @Input() zones: Zone[] = [];
    @Input() titleWidth = 200;

    constructor(@Optional() public mnemoscheme: EquipmentSchemaBaseClass) { }

    ngOnInit() {
    }

    onIndicatorClicked(indicator: Indicator) {
    }

}
