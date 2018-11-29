import { Facility } from "./facility-frame/facility-frame.models";
import { Routable } from "../highlights-on-department.service";
import { SchemaClickEvent } from "../../../../core-models/department-schema.models";

export class FacilityRaw extends Facility {
    statusRaw: string[];

    constructor(...inits: Partial<FacilityRaw>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class Line extends Routable {
    id: number;
    routes: string[];
    active: boolean;

    constructor(...inits: Partial<Line>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }
}

export class Callbacks {
    public onClicked: ($event: SchemaClickEvent) => void;
    public mouseout: (item: Line | Facility) => void;
    public mouseover: (item: Line | Facility) => void;

    constructor(...inits: Partial<Callbacks>[]) {
        Object.assign(this, ...inits);
    }
}
