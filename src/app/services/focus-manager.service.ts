import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FocusManagerService {

    private onFocusNeededSubject = new BehaviorSubject<string>(null);

    constructor() { }

    public subscribe(focusName: string) {
        return this.onFocusNeededSubject.asObservable().filter(value => value === focusName);
    }

    public focus(focusName: string) {
        this.onFocusNeededSubject.next(focusName);
    }

}
