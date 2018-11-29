import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    private authService: AuthService;
    constructor(private injector: Injector) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.authService = this.injector.get(AuthService);
        let token = '';
        if (this.authService.token) {
            token = this.authService.token.access_token;
        }
        try {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });

            return next.handle(authReq);
        } catch (e) {
            console.log(e);
        }
    }
}
