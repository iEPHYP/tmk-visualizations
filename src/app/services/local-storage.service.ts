import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
    constructor() {}

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return key;
        }
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
