import { Routable } from '../../highlights-on-department.service';

export class Facility extends Routable {
    public id: number;
    public title: string;
    public status: {
        critical?: boolean;
        stopping?: boolean;
        deviation?: boolean;
        normal?: boolean;
        notWork?: boolean;
    } = {};
    public has3Levels: boolean;
    public label: string;
    public mainRoute: boolean;
    public x = 0;
    public y = 0;

    constructor(...inits: Partial<Facility>[]) {
        super(...inits);
        Object.assign(this, ...inits);
    }

    public reassign(...inits: Partial<Facility>[]) {
        if (inits) {
            inits.forEach(init => {
                delete init.id;
                delete init.label;
                delete init.routes;
                delete init.mainRoute;
                delete init.x;
                delete init.y;
            });
        }
        Object.assign(this, ...inits);
    }
}
