import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department1RoutingModule } from './department-1-routing.module';
import { Department1SchemaComponent } from './department-1-schema/department-1-schema.component';
import { Department1PageComponent } from './department-1-page/department-1-page.component';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { DepartmentCommonComponentsModule } from '../components/department-common-components.module';
import { Department1EquipmentsSchemasModule } from './department-1-equipments-schemas/department-1-equipments-schemas.module';
import { HightlighterService } from '../components/abstract-department-page/highlights-on-department.service';

@NgModule({
    imports: [
        CommonModule,
        CommonComponentsModule,
        Department1RoutingModule,
        DepartmentCommonComponentsModule,
        Department1EquipmentsSchemasModule,
    ],
    declarations: [
        Department1SchemaComponent,
        Department1PageComponent,
    ],
    providers: [HightlighterService]
})
export class Department1Module { }
