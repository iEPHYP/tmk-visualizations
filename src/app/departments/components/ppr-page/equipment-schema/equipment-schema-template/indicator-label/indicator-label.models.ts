export class Indicator {
    public id: string; // in case of facility: concatination of equipmentId and indicatorId. either indicatorId
    public equipmentId: number;
    public equipmentTitle: string;
    public equipmentShortTitle: string;
    public indicatorId: number;
    public title: string;
    public originTitle: string;
    public value = null;
    public minValue: number = null;
    public maxValue: number = null;
    public percentage: number;
    public status: number;
    public translate: { x: number, y: number } = { x: 0, y: 0 };
    public number: number;
    public visible = true;
    public units: string;
    public maxWidth: number;
    public groupId?: number;

    constructor(...inits: Partial<Indicator>[]) {
        Object.assign(this, ...inits);
    }
}
