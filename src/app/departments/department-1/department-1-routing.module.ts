import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { Department1PageComponent } from './department-1-page/department-1-page.component';
import { PPRPageComponent } from '../components/ppr-page/ppr-page.component';
import { EquipmentSchemaComponent } from '../components/ppr-page/equipment-schema/equipment-schema.component';
import { ElectrolyzerComponent } from './department-1-equipments-schemas/electrolyzer/electrolyzer.component';
import { ChlorinatorComponent } from './department-1-equipments-schemas/chlorinator/chlorinator.component';
import { SiloTowersComponent } from './department-1-equipments-schemas/silo-towers/silo-towers.component';
import { EquipmentChartsComponent } from '../components/ppr-page/equipment-charts/equipment-charts.component';
import { EquipmentChartComponent } from '../components/ppr-page/equipment-chart/equipment-chart.component';

const facilityRoute: Route = {
    path: 'ppr/:facilityId',
    component: PPRPageComponent,
    children: [
        {
            path: 'charts/:equipmentId',
            component: EquipmentChartsComponent
        },
        {
            path: 'chart/:equipmentId/:indicatorId',
            component: EquipmentChartComponent
        },
        {
            path: 'schema/:equipmentId',
            component: EquipmentSchemaComponent,
            children: [
                {
                    path: 'electrolyzer',
                    component: ElectrolyzerComponent
                },
                {
                    path: 'chlorinator',
                    component: ChlorinatorComponent
                },
                {
                    path: 'silo-towers',
                    component: SiloTowersComponent
                },
            ]
        }
    ]
};

const routes: Routes = [
    {
        path: '',
        component: Department1PageComponent,
        data: {
            shouldReuseTag: 'department-1'
        }
    },
    {
        path: ':type',
        component: Department1PageComponent,
        data: {
            shouldReuseTag: 'department-1'
        }
    },

    facilityRoute
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class Department1RoutingModule { }
