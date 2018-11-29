import {
    Component,
    Injector,
    forwardRef
} from "@angular/core";
import { EquipmentSchemaBaseClass } from "../../../components/ppr-page/equipment-schema/equipment-schema.base-class";
import {
    defaultIndicatorsLeft,
    defaultIndicatorsRight
} from "./electrolyzer.indicators";
import * as _ from "lodash";
import { defaultZones } from "./electrolyzer.zones";
import { Indicator } from "../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models";
import { mocks } from "./electrolyzer.mocks";

@Component({
    selector: "tmk-electrolyzer",
    templateUrl: "./electrolyzer.component.html",
    styleUrls: ["./electrolyzer.component.scss"],
    providers: [
        {
            provide: EquipmentSchemaBaseClass,
            useExisting: forwardRef(() => ElectrolyzerComponent)
        }
    ]
})
export class ElectrolyzerComponent extends EquipmentSchemaBaseClass {
    private levelIndicator: Indicator = new Indicator();
    public level() {
        if (
            !this.levelIndicator ||
            this.levelIndicator.value <= -50 ||
            this.levelIndicator.value == null
        ) {
            return 0.01;
        } else if (this.levelIndicator.value > 50) {
            return 1;
        } else {
            return (this.levelIndicator.value + 50) / 100;
        }
    }

    constructor(protected injector: Injector) {
        super(injector);
        this.titleWidth = 230;
    }

    protected setDefaults() {
        this.leftLabels = _(defaultIndicatorsLeft).cloneDeep();
        this.rightLabels = _(defaultIndicatorsRight).cloneDeep();
        this.zones = _(defaultZones).cloneDeep();

        this.levelIndicator = this.leftLabels[8];
    }

    protected getMocks(): Indicator[] {
        return mocks(this.equipmentId);
    }
}
