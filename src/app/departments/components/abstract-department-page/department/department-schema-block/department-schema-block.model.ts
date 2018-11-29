import { Routable } from '../../highlights-on-department.service';

export class Block extends Routable {
    public id: string;
    public title: string;
    public units: string;
    public input?: number;
    public output: number;
    public productTypeID: number;
    public destination: string;
    public progress: [number, number] | [number];
    public disabled = false;
    public width = 74;
    public height = 155;
    public x = -this.width;
    public y = -this.height;
    public color = '#242633';

    constructor(...inits: Partial<Block>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }

    public reassign(...inits: Partial<Block>[]) {
        inits.forEach(init => {
            if (init) {
                delete init.width;
                delete init.height;
                delete init.x;
                delete init.y;
                delete init.color;
            }
        });
        Object.assign(this, ...inits);
    }
}
