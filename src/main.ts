import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as moment from 'moment';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

// tslint:disable-next-line:max-line-length
$.fn.hyphenates = function () {
    const e = '[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]';
    const t = '[аеёиоуыэюя]';
    const n = '[бвгджзклмнпрстфхцчшщ]';
    const r = '[йъь]';
    const i = '­';
    const s = new RegExp('(' + r + ')(' + e + e + ')', 'ig');
    const o = new RegExp('(' + t + ')(' + t + e + ')', 'ig');
    const u = new RegExp('(' + t + n + ')(' + n + t + ')', 'ig');
    const a = new RegExp('(' + n + t + ')(' + n + t + ')', 'ig');
    const f = new RegExp('(' + t + n + ')(' + n + n + t + ')', 'ig');
    const l = new RegExp('(' + t + n + n + ')(' + n + n + t + ')', 'ig');
    this.each(function () {
        let each = $(this).html();
        each = each.replace(s, '$1' + i + '$2');
        each = each.replace(o, '$1' + i + '$2');
        each = each.replace(u, '$1' + i + '$2');
        each = each.replace(a, '$1' + i + '$2');
        each = each.replace(f, '$1' + i + '$2');
        each = each.replace(l, '$1' + i + '$2');
        $(this).html(each);
    });
};
moment.locale('ru');

import { AppModule } from './app/app.module';


import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilKeyChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/timer';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.type === 'prod') {
    enableProdMode();
}

function login() {
    let logged = false;
    if (sessionStorage.getItem('logged') !== 'true') {
        while (!logged) {
            const pin = prompt('ВВедите пинкод');
            if (pin === '12345') {
                logged = true;
                sessionStorage.setItem('logged', 'true');
            }
        }
    } else {
        logged = true;
    }
    return logged;
}

function bootstrapModule() {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap);
    } else {
        bootstrap();
    }
}

bootstrapModule();
