import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FilterListComponent } from './filter-list/filter-list.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderDirective } from './loader-directive/loader.directive';

import { LoaderComponent } from './loader/loader.component';
import { FocusDirective } from './directives/focus.directive';
import { MyOwnCustomMaterialModule } from './angular.material.module';
import { SyncScrollDirective, SyncScrollElDirective } from './directives/sync-scroll.directive';
import { UppercaseDirective } from './directives/uppercase.directive';

// PIPES
import { TechnicalParamsFilterPipe } from './pipes/technical-params-filter.pipe';
import { PositiveNumberDirective } from './positive-number.directive';
import { SelectRequiredDirective } from './select-required.directive';
import { ByPropPipe } from './pipes/by-prop.pipe';

@NgModule({
    imports: [
        CommonModule,
        MalihuScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        MyOwnCustomMaterialModule
    ],
    declarations: [
        FilterListComponent,
        LoaderDirective,
        LoaderComponent,
        FocusDirective,
        TechnicalParamsFilterPipe,
        SyncScrollDirective,
        SyncScrollElDirective,
        UppercaseDirective,
        PositiveNumberDirective,
        SelectRequiredDirective,
        ByPropPipe
    ],
    exports: [
        FilterListComponent,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        LoaderDirective,
        LoaderComponent,
        FocusDirective,
        MyOwnCustomMaterialModule,
        SyncScrollDirective,
        SyncScrollElDirective,
        UppercaseDirective,
        PositiveNumberDirective,
        SelectRequiredDirective,
        ByPropPipe
    ],
    entryComponents: [
        FilterListComponent,
        LoaderComponent,
    ],

})
export class SharedComponentsModule { }
