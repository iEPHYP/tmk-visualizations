export class Frame {
    public id: number;
    public title: string;

    private _fillingness = 1;
    public get fillingness() {
        if (this._fillingness > 1) {
            return 1;
        } else if (this._fillingness < 0) {
            return 0;
        } else {
            return this._fillingness;
        }
    }
    public set fillingness(val: number) {
        this._fillingness = val;
    }

    public indicators: string[];

    constructor(...inits: Partial<Frame>[]) {
        Object.assign(this, ...inits);
    }
}
