import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { PPRPageComponent } from './ppr-page/ppr-page.component';
import { RouterModule } from '@angular/router';
import { EquipmentSchemaComponent } from './ppr-page/equipment-schema/equipment-schema.component';
import { MatIconModule } from '@angular/material/icon';
import { EquipmentSchemaService } from './ppr-page/equipment-schema/equipment-schema.service';
import { FormsModule } from '@angular/forms';
import { AbstractDepartmentPageComponent } from './abstract-department-page/abstract-department-page.component';
import { IndicatorLabelComponent } from './ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.component';

import { ZoneComponent } from './ppr-page/equipment-schema/equipment-schema-template/zone/zone.component';
import { EquipmentSchemaTemplateComponent } from './ppr-page/equipment-schema/equipment-schema-template/equipment-schema-template.component';
import { FrameComponent } from './ppr-page/equipment-schema/equipment-schema-template/frame/frame.component';

import { EquipmentChartComponent } from './ppr-page/equipment-chart/equipment-chart.component';
import { EquipmentChartsComponent } from './ppr-page/equipment-charts/equipment-charts.component';
import { PprPageService } from './ppr-page/ppr-page.service';
import { DepartmentComponent } from './abstract-department-page/department/department.component';
import { DepartmentSchemaBlockComponent } from './abstract-department-page/department/department-schema-block/department-schema-block.component';
import { DepartmentSchemaProgressBarComponent } from './abstract-department-page/department/department-schema-block/department-schema-progress-bar/department-schema-progress-bar.component';
import { FacilityFrameComponent } from './abstract-department-page/department/facility-frame/facility-frame.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        CommonComponentsModule,
        FormsModule
    ],
    declarations: [
        DepartmentComponent,
        DepartmentSchemaBlockComponent,
        DepartmentSchemaProgressBarComponent,
        PPRPageComponent,
        EquipmentSchemaComponent,
        AbstractDepartmentPageComponent,
        EquipmentSchemaTemplateComponent,
        IndicatorLabelComponent,
        ZoneComponent,
        FrameComponent,
        FacilityFrameComponent,
        EquipmentChartComponent,
        EquipmentChartsComponent,
    ],
    exports: [
        DepartmentComponent,
        DepartmentSchemaBlockComponent,
        DepartmentSchemaProgressBarComponent,
        PPRPageComponent,
        EquipmentSchemaComponent,
        EquipmentSchemaTemplateComponent,
        IndicatorLabelComponent,
        ZoneComponent,
        FrameComponent,
        FacilityFrameComponent,
    ],
    providers: [
        PprPageService,
        EquipmentSchemaService
    ]
})
export class DepartmentCommonComponentsModule {
    constructor() { }
}
