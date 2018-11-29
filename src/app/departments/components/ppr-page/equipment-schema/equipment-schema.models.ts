export class Label {

    public id: number;
    public title: string;
    public value: number | Date;
    public lines: string[] = [];

    constructor(...inits: Partial<Label>[]) {
        Object.assign(this, ...inits);
    }
}

export class EquipmentRoute {
    public route: string;
    public forFacility = false;

    constructor(...inits: Partial<EquipmentRoute>[]) {
        Object.assign(this, ...inits);
    }
}
