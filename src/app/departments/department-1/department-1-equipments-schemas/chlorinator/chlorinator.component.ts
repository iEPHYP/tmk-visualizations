import { Component, Injector, forwardRef } from '@angular/core';
import { EquipmentSchemaBaseClass } from '../../../components/ppr-page/equipment-schema/equipment-schema.base-class';
import { defaultIndicatorsRight, defaultIndicatorsLeft } from './chlorinator.indicators';
import * as _ from 'lodash';
import { defaultZones } from './chlorinator.zones';
import { defaultFrames } from './chlorinator.frames';
import { Indicator } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';
import { mocks } from './chlorinator.mocks';

@Component({
    selector: 'tmk-chlorinator',
    templateUrl: './chlorinator.component.html',
    styleUrls: ['./chlorinator.component.scss'],
    providers: [{ provide: EquipmentSchemaBaseClass, useExisting: forwardRef(() => ChlorinatorComponent) }]
})
export class ChlorinatorComponent extends EquipmentSchemaBaseClass {

    constructor(protected injector: Injector) {
        super(injector);
        this.titleWidth = 190;
    }

    protected setDefaults() {
        this.leftLabels = _(defaultIndicatorsLeft).cloneDeep();
        this.rightLabels = _(defaultIndicatorsRight).cloneDeep();
        this.zones = _(defaultZones).cloneDeep();
        this.frames = _(defaultFrames).cloneDeep();
    }

    protected getMocks(): Indicator[] {
        return mocks(this.equipmentId);
    }
}
