import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../../constants';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Indicator } from './equipment-schema-template/indicator-label/indicator-label.models';

@Injectable()
export class EquipmentSchemaService {

    constructor(
        @Inject(API_URL) private apiUrl: string,
        private http: HttpClient
    ) { }

    public getIndicators(equipmentId: number, facility: boolean = false, date: string): Observable<Indicator[]> {
        const subject = new Subject<Indicator[]>();

        this.http.get(`${this.apiUrl}/api/Mnemoscheme/GetIndicatorValues?equipmentId=${equipmentId}&facility=${facility}&dateTo=${date}`)
            .subscribe(response => {
                subject.next(<Indicator[]>response);
            });

        return subject.asObservable();
    }

}
