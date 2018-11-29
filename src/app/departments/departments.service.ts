import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { API_URL } from '../constants';

@Injectable()
export class DepartmentsService {

    constructor(
        @Inject(API_URL) private apiUrl: string,
        private http: HttpClient
    ) { }

    public GetEquipmentIndicators(equipmentId: number): Promise<any[]> {

        const body = {
            'Name': 'GetTMK_EquipmentIndicatorsList',
            'Parameters': [
                {
                    'Name': 'equipmentID',
                    'Value': equipmentId.toString()
                }
            ]
        };

        return this.http.post(`${this.apiUrl}/api/StorageProcedure`, body).toPromise()
            .then(res => res as any[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
