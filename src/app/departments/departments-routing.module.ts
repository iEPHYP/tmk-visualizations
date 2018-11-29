import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const departmentRoutes: Routes = [
];

const routes: Routes = [
    {
        path: '',
        redirectTo: '1',
        pathMatch: 'full'
    },
    {
        path: '1',
        loadChildren: './department-1/department-1.module#Department1Module',
        data: {
            departmentId: 101
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
