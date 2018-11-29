import {
    Component,
    Injector,
    forwardRef
} from "@angular/core";
import { EquipmentSchemaBaseClass } from "../../../components/ppr-page/equipment-schema/equipment-schema.base-class";
import {
    defaultIndicatorsLeft,
    defaultIndicatorsRight
} from "./silo-towers.indicators";
import * as _ from "lodash";
import { Indicator } from "../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models";
import { mocks } from "./silo-towers.mocks";

@Component({
    selector: "tmk-silo-towers",
    templateUrl: "./silo-towers.component.html",
    styleUrls: ["./silo-towers.component.scss"],
    providers: [
        {
            provide: EquipmentSchemaBaseClass,
            useExisting: forwardRef(() => SiloTowersComponent)
        }
    ]
})
export class SiloTowersComponent extends EquipmentSchemaBaseClass {
    private maxLevel = 396;

    constructor(protected injector: Injector) {
        super(injector);
        this.titleWidth = 150;
    }

    protected setDefaults() {
        this.leftLabels = _(defaultIndicatorsLeft).cloneDeep();
        this.rightLabels = _(defaultIndicatorsRight).cloneDeep();
    }

    public getLevel(indicator: Indicator): number {
        if (_.isNil(indicator.value) || indicator.value > indicator.maxValue) {
            return 0;
        } else if (indicator.value < 0) {
            return this.maxLevel;
        } else {
            return (
                (this.maxLevel * (indicator.maxValue - indicator.value)) /
                indicator.maxValue
            );
        }
    }

    public translate(label: Indicator, index: number, top: number = 215) {
        return `translate(${191 + index * 170}px, ${top}px)`;
    }

    protected getMocks(): Indicator[] {
        return mocks(this.equipmentId);
    }
}
