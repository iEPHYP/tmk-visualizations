import 'rxjs/add/operator/do';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {
    router: Router;
    toastrService: ToastrService;
    constructor(private injector: Injector) {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.router = this.injector.get(Router);
        this.toastrService = this.injector.get(ToastrService);
        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.toastrService.warning(
                            'Сессия истекла, попробуйте войти заново',
                            '',
                            {
                                timeOut: 10000
                            }
                        );
                        this.router.navigate(['/login']);
                    } else {
                        let title = 'Ошибка сервера';
                        if (err.status >= 400 && 500 > err.status) {
                            title = 'Ошибка клиента';
                        }

                        const message =
                            err.error.message ||
                            err.error.error ||
                            err.error.exceptionMessage;

                        this.toastrService.error(message, title, {
                            closeButton: true,
                            timeOut: 10000
                        });
                    }
                }
            }
        );
    }
}
