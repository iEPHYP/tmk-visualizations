import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { StorageService } from './storage/storage.service';

@Injectable()
export class SettingsService {

    public isTableMenuActive = false;
    public isChartMenuActive = false;

    private datesChangedSubject = new Subject();
    public onDatesChanged = this.datesChangedSubject.asObservable();

    private _selectedDate: { startDate: moment.Moment, endDate: moment.Moment };
    public get selectedDate(): { startDate: moment.Moment, endDate: moment.Moment } {
        return this._selectedDate;
    }
    public set selectedDate(v: { startDate: moment.Moment, endDate: moment.Moment }) {
        this._selectedDate = v;
        this.storage.setItem(StorageService.APP_DATES_START, v.startDate);
        this.storage.setItem(StorageService.APP_DATES_FINISH, v.endDate);
        this.datesChangedSubject.next();
    }

    constructor(private storage: StorageService) {
        const startDateStr = this.storage.getItem(StorageService.APP_DATES_START);
        const endDateStr = this.storage.getItem(StorageService.APP_DATES_FINISH);

        const startDate = (startDateStr) ? moment(startDateStr) : moment();
        const endDate = (endDateStr) ? moment(endDateStr) : moment();

        this._selectedDate = {
            startDate, endDate
        };

     }

}
