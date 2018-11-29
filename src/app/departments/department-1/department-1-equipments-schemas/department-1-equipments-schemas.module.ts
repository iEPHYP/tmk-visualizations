import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectrolyzerComponent } from './electrolyzer/electrolyzer.component';
import { ChlorinatorComponent } from './chlorinator/chlorinator.component';
import { DepartmentCommonComponentsModule } from '../../components/department-common-components.module';
import { SiloTowersComponent } from './silo-towers/silo-towers.component';

@NgModule({
    imports: [
        CommonModule,
        DepartmentCommonComponentsModule
    ],
    declarations: [
        ChlorinatorComponent,
        ElectrolyzerComponent,
        SiloTowersComponent,
    ],
    exports: [
        ChlorinatorComponent,
        ElectrolyzerComponent,
        SiloTowersComponent,
    ]
})
export class Department1EquipmentsSchemasModule { }
