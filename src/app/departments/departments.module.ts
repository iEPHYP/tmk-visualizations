import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsService } from './departments.service';
import { DepartmentMnemoschemeService } from './services/department-mnemoscheme.service';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { DepartmentCommonComponentsModule } from './components/department-common-components.module';
import { DepartmentsWrapperComponent } from './departments-wrapper/departments-wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        CommonComponentsModule,
        DepartmentCommonComponentsModule,
        DepartmentsRoutingModule,
    ],
    declarations: [
        DepartmentsWrapperComponent
    ],
    exports: [],
    entryComponents: [],
    providers: [DepartmentsService, DepartmentMnemoschemeService]
})
export class DepartmentsModule {

}
