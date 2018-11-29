import { Injectable, Inject } from '@angular/core';
import { DEFAULT_STORAGE } from '../../constants';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StorageService {

    public static APP_DATES_START = 'app.dates.start';
    public static APP_DATES_FINISH = 'app.dates.finish';

    private onItemChangeSubject = new Subject<{ item: string, value: any }>();
    public onItemChange = this.onItemChangeSubject.asObservable();

    private onStorageCleanedSubject = new Subject();
    public onStorageCleaned = this.onStorageCleanedSubject.asObservable();

    constructor( @Inject(DEFAULT_STORAGE) private storage: Storage) { }

    clear(storage = this.storage): void {
        for (const i in storage) {
            if (i in storage) {
                this.onItemChangeSubject.next({
                    item: i,
                    value: undefined
                });
            }
        }
        storage.clear();
        this.onStorageCleanedSubject.next();
    }

    getItem<T = any>(key: string, storage = this.storage): T {
        return JSON.parse(storage.getItem(key)) as T;
    }

    removeItem(key: string, storage = this.storage): void {
        storage.removeItem(key);
        this.onItemChangeSubject.next({
            item: key,
            value: undefined
        });
        if (storage.length === 0) {
            this.onStorageCleanedSubject.next();
        }
    }

    setItem<T = any>(key: string, data: T, storage = this.storage): void {
        storage.setItem(key, JSON.stringify(data));
        this.onItemChangeSubject.next({
            item: key,
            value: data
        });
    }

}