import { API_URL, API_URL_FACTORY, DEFAULT_STORAGE, DEFAULT_STORAGE_FACTORY } from './constants';
import { FactoryProvider, LOCALE_ID, NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './app-state/states/app.state';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarActions } from './app-state/actions/calendar.actions';
import { CalendarDataService } from './services/calendar-data.service';
import { CommonComponentsModule } from './common-components/common-components.module';
import { DepartmentActions } from './app-state/actions/department.actions';
import { DevToolsExtension } from '@angular-redux/store';
import { FocusManagerService } from './services/focus-manager.service';
import { FontWatcherService } from './services/font-watcher.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './shared-components/services/loader.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PageActions } from './app-state/actions/page.actions';
import { SettingsService } from './services/settings.service';
import { StorageService } from './services/storage/storage.service';
import { createLogger } from 'redux-logger';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { rootReducer } from './app-state/reducers/root.reducer';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthTokenInterceptor } from './interceptors/auth-token-interceptor';
import { AuthResponseInterceptor } from './interceptors/auth-response-interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';

// own modules menu components
import { ApiService } from './services/api.service';
import { HelperService } from './services/helper.service';

registerLocaleData(localeRu);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonComponentsModule,
        HttpClientModule,
        OverlayModule,
        AppRoutingModule,
        NgReduxModule,
        NgReduxRouterModule,
        ToastrModule.forRoot()
    ],
    entryComponents: [
    ],
    providers: [
        <FactoryProvider>{
            provide: API_URL,
            useFactory: API_URL_FACTORY
        },
        <FactoryProvider>{
            provide: DEFAULT_STORAGE,
            useFactory: DEFAULT_STORAGE_FACTORY
        },
        {
            provide: LOCALE_ID, useValue: 'ru-RU'
        },
        SettingsService,
        StorageService,
        LoaderService,
        FocusManagerService,
        CalendarDataService,
        FontWatcherService,
        CalendarActions,
        DepartmentActions,
        PageActions,
        AuthService,
        LocalStorageService,
        ApiService,
        HelperService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthResponseInterceptor,
            multi: true
        },
        UserService,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {

    constructor(
        private ngRedux: NgRedux<AppState>,
        private devTools: DevToolsExtension,
        private ngReduxRouter: NgReduxRouter,
    ) {
        ngRedux.configureStore(rootReducer, undefined, [createLogger()], [
            ...(devTools.isEnabled() ? [devTools.enhancer()] : [])
        ]);

        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
    }
}
