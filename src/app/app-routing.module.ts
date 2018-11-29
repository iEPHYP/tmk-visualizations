import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsDemoComponent } from './common-components/icons-demo/icons-demo.component';
import { DefaultPageMenuRouterOutlet } from './common-components/default-page-menu-router-outlet/default-page-menu-router-outlet.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'departments',
                pathMatch: 'full'
            },
            {
                path: 'departments',
                loadChildren: 'app/departments/departments.module#DepartmentsModule',
                component: DefaultPageMenuRouterOutlet
            },
            {
                path: 'icons',
                component: IconsDemoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
