import { InjectionToken } from '@angular/core';
import { environment } from './../environments/environment';

export const API_URL = new InjectionToken<string>('app.api-url');

export function API_URL_FACTORY() {
    // if (environment.type === 'dev') {
    //     return 'http://192.168.1.166:7801';
    // } else if (environment.type === 'prod-old') {
    //     return 'http://89.28.130.242:8082';
    // } else if (environment.type === 'prod') {
    //     return 'http://10.0.0.5:8082';
    // } else if (environment.type === 'debug') {
    //     return 'http://localhost:60968';
    // }
    if (environment.type === 'prod' || environment.type === 'prod-old') {
        return '';
    } else if (environment.type === 'dev') {
        return 'http://192.168.1.161:7800';
    } else {
        // debug...
        return 'http://localhost:60968';
    }
}

export function API_URL_BALANCES(): string {
    if (environment.type === 'prod' || environment.type === 'prod-old') {
        return '/balanceApi/api';
    } else if (environment.type === 'debug' || environment.type === 'dev') {
        return 'http://192.168.1.161:7800/balanceApi/api';
    }
    // } else if (environment.type === 'prod-old') {
    //     return 'http://212.19.138.21:8000/api';
    // } else if (environment.type === 'prod') {
    //     return 'http://10.0.0.5:9999/api';
    // }
    // } else if (environment.type === 'debug') {
    // return 'http://localhost:60968';
    // }
}

export const DEFAULT_STORAGE = new InjectionToken('app.storage');
export function DEFAULT_STORAGE_FACTORY() {
    return sessionStorage;
}

export const LOCAL_STORAGE_AUTH_KEY = 'tmk_auth_key';
