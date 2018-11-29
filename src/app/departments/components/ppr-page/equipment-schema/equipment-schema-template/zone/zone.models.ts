export class Zone {
    public id: number;
    public critical = false;
    public indicators: string[] = []; // list of indicators id attached to this zone
    public visible = true;

    constructor(init?: Partial<Zone>) {
        Object.assign(this, init);
    }
}
