import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import {
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL, LOCAL_STORAGE_AUTH_KEY } from '../constants';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    private isAuthenticated = false; // !!
    redirectUrl: string;

    constructor(
        private http: HttpClient,
        private storage: LocalStorageService,
        @Inject(API_URL) private apiUrl: string,
        private router: Router,
        private userService: UserService
    ) {
        // this.loadStorage();  // !!
        this.loadStorage();
        this.redirectUrl = '';
    }

    token: SignInResponse;

    isLoggedIn() {
        this.loadStorage();
        return this.isAuthenticated;
        // return true;
    }

    login(model: SignInModel): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', model.userName)
            .set('password', model.password);

        const url = `${this.apiUrl}/token`;
        return this.http.post<any>(url, body.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    logout(): void {
        this.storage.set(LOCAL_STORAGE_AUTH_KEY, null);
        this.isAuthenticated = false;
        this.router.navigate(['login']);
        this.userService.invalidateCache();
    }

    getToken(): string {
        return null;
    }

    loadStorage(): void {
        const td = this.storage.get(LOCAL_STORAGE_AUTH_KEY);
        const res: SignInResponse = null;
        if (td && td !== LOCAL_STORAGE_AUTH_KEY) {
            this.token = <SignInResponse>td;
            this.isAuthenticated = true;
        } else {
            this.isAuthenticated = false;
        }
    }

    getAllowedActions(componenets: any[]): Observable<any[]> {
        return this.http.get<any[]>(
            this.apiUrl + `/api/pages/AllowedActions?pageNames=${componenets}`
        );
    }

    checkPageAccess(componenets: any[]): Observable<boolean> {
        return this.getAllowedActions(componenets).map(response => {
            return response && response.length > 0;
        });
    }
}

export class SignInModel {
    userName: string;
    password: string;
    rememberMe?: boolean;
}

export interface SignInResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    userName: string;
}
