import { Injectable, Inject } from '@angular/core';
import { API_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly http: HttpClient
  ) {

  }

  getFactories(): Observable<Common.Item[]> {
    return this.http.get<Common.Item[]>(`${this.apiUrl}/api/Factories`);
  }

  getDepartments(factoryId: number, activeOnly: boolean = false): Observable<Common.DepartmentItem[]> {
    const queryApi = `${this.apiUrl}/api/Departments`;
    let params = new HttpParams().set('factoryId', factoryId.toString());
    params = params.set('activeOnly', JSON.stringify(activeOnly));

    return this.http.get<Common.DepartmentItem[]>(`${queryApi}`, { params: params });
  }

  getProducts(factoryId: number): Observable<Common.Item[]> {
    const queryApi = `${this.apiUrl}/api/ref/Get/GetProductsByOrgUnitID`;
    const params = new HttpParams().set('orgUnitID', factoryId.toString());

    return this.http.get<Common.Item[]>(`${queryApi}`, { params: params });
  }

  getDictionary(type: string): Observable<Common.Item[]> {
    const queryApi = `${this.apiUrl}/api/ref/Get/${type}`;
    return this.http.get<Common.Item[]>(`${queryApi}`);
  }

  getProductsBy(productTypeId: number, materialTypeId?: number) {
    const queryApi = `${this.apiUrl}/api/ref/Get/GetProductsByTypes`;
    let params = new HttpParams().set('productTypeId', productTypeId.toString());

    if (materialTypeId) {
      params = params
        .set('materialTypeId', materialTypeId.toString());
    }

    return this.http.get<Common.Item[]>(`${queryApi}`, { params: params });
  }

  getUnits(): Observable<Common.Item[]> {
    // /api/Dictionary/Units
    const queryApi = `${this.apiUrl}/api/Dictionary/Units`;
    return this.http.get<Common.Item[]>(`${queryApi}`);
  }
}
