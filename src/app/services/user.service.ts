import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { API_URL } from '../constants';

@Injectable()
export class UserService {
    url: string;
    constructor(
        private http: HttpClient,
        @Inject(API_URL) private apiUrl: string
    ) {
        this.url = this.apiUrl + '/api/userInfo';
    }
    user;
    getUser(): Observable<UserModel> {
        if (this.user) {
            return Observable.of(this.user);
        } else {
            const promise = this.http.get<UserModel>(this.url);
            promise.subscribe(res => this.user = res);
            return promise;
        }
    }
    invalidateCache() {
        this.user = null;
    }
}

export class UserModel {
    id: string;
    userFullName: string;
    departmentTitle: string;
    positionTitle: string;
}
