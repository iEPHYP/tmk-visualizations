import * as _ from 'lodash';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconRegistry, MatMenuModule } from '@angular/material';

import { ChartComponentsModule } from './charts/components/chart-components.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { HyphinatePipe } from './pipes/hyphinate.pipe';
import { IconsDemoComponent } from './icons-demo/icons-demo.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MomentDateFormatPipe } from './pipes/moment-date-format.pipe';
import { NgModule } from '@angular/core';
import { NumberShortPipe } from './pipes/number-short.pipe';
import { NumberSplitPipe } from './pipes/number-split.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { DefaultPageMenuRouterOutlet } from './default-page-menu-router-outlet/default-page-menu-router-outlet.component';

import { TakePipe } from '../shared-components/pipes.pipe';
import { PeriodTypePipe } from './pipes/period-type.pipe';
import { PasswordPipe } from './pipes/password.pipe';

// PIPES
import { TechnicalParamsFilterPipe } from './pipes/technical-params-filter.pipe';

export const ICONS = {
    'calc': '1@1x.svg',
    'check-list': '2@1x.svg',
    'close': '3@1x.svg',
    'shrink': '4@1x.svg',
    'document': '5@1x.svg',
    'folder': '6@1x.svg',
    'document-pen': '7@1x.svg',
    'filter': '8@1x.svg',
    'product': '9@1x.svg',
    'dashboard': '10@1x.svg',
    'clock': '11@1x.svg',
    'graph': '12@1x.svg',
    'arrow-shrink': '13@1x.svg',
    'arrow-expand': '14@1x.svg',
    'info': '15@1x.svg',
    'arrow-top': '16@1x.svg',
    'arrow-bottom': '17@1x.svg',
    'exclamation-triangle-3': '18@1x.svg',
    'symbol-m': '19@1x.svg',
    'exclamation-triangle': '20@1x.svg',
    'clock-2': '21@1x.svg',
    'exclamation-triangle-2': '22@1x.svg',
    'reload': '23@1x.svg',
    'tick-in-circle': '24@1x.svg',
    'chevron-down': '25@1x.svg',
    'reload2': '26@1x.svg',
    'reload3': '27@1x.svg',
    'reload4': '28@1x.svg',
    'chevron-down-thin': '29@1x.svg',
    'calc-rect': '30@1x.svg',
    'folded-doc': '31@1x.svg',
    'person': '32@1x.svg',
    'table': '33@1x.svg',
    'chart': '34@1x.svg',
    'folded-doc-list': '35@1x.svg',
    'logs-icon': 'logs-icon.svg',
    'trash': 'trash.svg',
    'search-icon': 'search-icon.svg',
    'search-icon-black': 'search-icon-black.svg',
    'edit-icon': 'edit-icon.svg',
    'ok': 'ok.svg',
    'eye-slash': 'eye-slash.svg',
    'magnifying-glass': 'magnifying-glass.svg'
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        MatIconModule,
        MatSelectModule,
        MatMenuModule,
        ChartComponentsModule,
        MalihuScrollbarModule.forRoot()
    ],
    declarations: [
        NumberSplitPipe,
        MomentDateFormatPipe,
        HyphinatePipe,
        IconsDemoComponent,
        NumberShortPipe,
        PluralPipe,
        PeriodTypePipe,
        DefaultPageMenuRouterOutlet,
        TakePipe,
        PasswordPipe,
        TechnicalParamsFilterPipe
    ],
    exports: [
        ChartComponentsModule,
        MalihuScrollbarModule,
        NumberSplitPipe,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        MatIconModule,
        MatMenuModule,
        MomentDateFormatPipe,
        HyphinatePipe,
        NumberShortPipe,
        PeriodTypePipe,
        PluralPipe,
        CommonModule,
        DefaultPageMenuRouterOutlet,
        TakePipe,
        PasswordPipe,
        TechnicalParamsFilterPipe
    ]
})
export class CommonComponentsModule {
    constructor(private mdIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        _(ICONS).keys().forEach(key => {
            mdIconRegistry.addSvgIconInNamespace(
                'tmk',
                key,
                sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/web-icons/${ICONS[key]}`)
            );
        });
    }
}
