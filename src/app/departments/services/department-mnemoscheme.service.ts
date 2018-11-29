import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { API_URL } from '../../constants';
import { Block } from '../components/abstract-department-page/department/department-schema-block/department-schema-block.model';
import { Subject } from 'rxjs/Subject';
import { Facility } from '../components/abstract-department-page/department/facility-frame/facility-frame.models';

@Injectable()
export class DepartmentMnemoschemeService {
    constructor(
        @Inject(API_URL) private apiUrl: string,
        private http: HttpClient
    ) { }

    getEquipment(
        orgUnitId: number,
        dateFrom: string,
        dateTo: string
    ): Observable<Facility[]> {
        const subject = new Subject<Facility[]>();
        setTimeout(() => subject.next([
            new Facility({
                id: 105,
                title: 'Силосные башни',
                label: 'A1',
                has3Levels: true,
                status: {
                    deviation: true,
                }
            }),
            new Facility({
                id: 106,
                title: 'Карналлитовый Хлоратор',
                label: 'A2',
                has3Levels: true,
                status: {
                    normal: true,
                }
            }),
            new Facility({
                id: 109,
                title: 'Электролизеры',
                label: 'A3',
                has3Levels: true,
                status: {
                    notWork: true,
                }
            }),
            new Facility({
                id: 102,
                title: 'Печь ПНР',
                label: 'A4',
                status: {
                    stopping: true
                }
            }),
            new Facility({
                id: 103,
                title: 'Установка литья магния',
                label: 'A5',
                status: {
                    deviation: true,
                    normal: true,
                }
            }),
            new Facility({
                id: 101,
                title: 'Хлорная компрессорная',
                label: 'A6',
                status: {
                    normal: true,
                    notWork: true,
                }
            }),
            new Facility({
                id: 108,
                title: 'Миксер кристаллизации',
                label: 'A7',
                status: {
                    notWork: true,
                    stopping: true
                }
            }),
            new Facility({
                id: 107,
                title: 'Головной миксер',
                label: 'A8',
                status: {
                    deviation: true,
                    stopping: true
                }
            }),
            new Facility({
                id: 112,
                title: 'Насосные',
                label: 'A9',
                status: {
                    deviation: true,
                    normal: true,
                    notWork: true,
                }
            }),
            new Facility({
                id: 121,
                title: 'Участок литья фторфлогопита',
                label: 'A10',
                status: {
                    deviation: true,
                    normal: true,
                    notWork: true,
                    stopping: true
                }
            }),
        ]), 500);

        return subject.asObservable();
    }

    getDepartment(
        orgUnitId: number,
        dateFrom: string,
        dateTo: string
    ): Observable<Block[]> {
        const subject = new Subject<Block[]>();
        setTimeout(() => subject.next([

        ]), 500);
        return subject.asObservable();
    }
}
