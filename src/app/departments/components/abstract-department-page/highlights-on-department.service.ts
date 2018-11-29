import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class Routable {
    public routes: string[] = [];

    constructor(...inits: Partial<Routable>[]) {
        Object.assign(this, ...inits);
    }
}

@Injectable()
export class HightlighterService {

    private routeSubjects: Map<string, Subject<boolean>> = new Map<string, Subject<boolean>>();

    constructor() {
    }

    public highlightRoutes(item: Routable, active: boolean) {
        item.routes.forEach(route => {
            const routeSubject = this.routeSubjects.get(route);
            if (routeSubject) {
                routeSubject.next(active);
            }
        });
    }

    public subscribeToRouteHighlights(item: Routable): Observable<boolean> {
        const mainSubject = new Subject<boolean>();
        item.routes.forEach(route => {
            let routeSubject = this.routeSubjects.get(route);
            if (!routeSubject) {
                routeSubject = new Subject<boolean>();
                this.routeSubjects.set(route, routeSubject);
            }
            routeSubject.asObservable().subscribe(active => {
                mainSubject.next(active);
            });
        });

        return mainSubject.asObservable();
    }
}
