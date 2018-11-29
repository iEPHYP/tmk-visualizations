import 'rxjs/add/operator/distinctUntilChanged';

import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, RoutesRecognized } from '@angular/router';
import { isNil, merge, omitBy } from 'lodash';

import { API_URL } from '../constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

interface ICalendarData {
  params: { orgUnit?: number, productIds?: number };
  dates: { [month: string]: { [year: string]: { [day: string]: any } } };
}

type CalendarDataResponse = string[][];

@Injectable()
export class CalendarDataService {
  private readonly data: BehaviorSubject<ICalendarData> = new BehaviorSubject({ params: {}, dates: {} });
  private readonly currentYear: number = new Date().getFullYear();
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    router.events.filter((event) => {
      const path = router.routerState.root.firstChild != null ? router.routerState.root.firstChild.routeConfig.path : '';
      return event instanceof NavigationEnd && path === 'departments';
    }).map((routeData: NavigationEnd) => {
        const { departmentId: orgUnit } = router.routerState.snapshot.root.firstChild.firstChild.data;
        const { productId: productIds } = router.routerState.snapshot.root.firstChild.firstChild.firstChild.params;
        return omitBy({ orgUnit, productIds }, isNil);
      })
      .distinctUntilChanged((p, c) => {
        return p.orgUnit == c.orgUnit && p.productIds == c.productIds
      })
      .subscribe((params) => {
        if (params.orgUnit && params.productIds) {
          this.update(params.orgUnit, params.productIds);
        } else {
          this.data.next({ params: {}, dates: {} });
        }
      });
  }

  private update(orgUnitId, productIds) {
    const parametersObject = omitBy({ orgUnitId, productIds, startDate: `${this.currentYear - 4}-01-01`, endDate: `${this.currentYear + 3}-01-01` }, isNil);
    this.http.post<CalendarDataResponse>(`${this.apiUrl}/api/StorageProcedure`, {
      name: 'GetTMK_ProductFactValues_Calendar',
      parameters: Object.keys(parametersObject).map((key) => ({ name: key, value: parametersObject[key] }))
    })
    .map((response) => ({
      params: parametersObject, dates: this.mapDatesToObj(response.reduce((p, c) => p.push(...c) && p, []))
    }))
    .subscribe((data) => {
      this.data.next(data);
    });
  }

  private mapDatesToObj(dates: string[]) {
    const obj = {};
    dates.forEach((date) => {
      const [dateOnly] = date.split('T');
      let [year, month, day] = dateOnly.split('-');
      if (month.charAt(0) === '0') {
        month = month.charAt(1);
      }
      if (day.charAt(0) === '0') {
        day = day.charAt(1);
      }
      if (!obj[month]) {
        obj[month] = {};
      }
      if (!obj[month][year]) {
        obj[month][year] = {};
      }
      obj[month][year][day] = true;
    });
    return obj;
  }

  get state() {
    return this.data.map((data) => data.dates).distinctUntilChanged();
  }
}
