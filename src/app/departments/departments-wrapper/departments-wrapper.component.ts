import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { filter } from 'rxjs/operators';
import { DepartmentActions } from '../../app-state/actions/department.actions';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { AppState } from '../../app-state/states/app.state';

@Component({
    selector: 'tmk-departments-wrapper',
    templateUrl: './departments-wrapper.component.html',
    styleUrls: ['./departments-wrapper.component.scss']
})
export class DepartmentsWrapperComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private ngRedux: NgRedux<AppState>,
        private departmentsActions: DepartmentActions,
        private injector: Injector
    ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(this.navigated.bind(this));
    }

    private navigated(event: NavigationEnd) {
        const route = this.injector.get(ActivatedRoute);
        const data = this.getData(route.root);
        if ('departmentId' in data) {
            this.ngRedux.dispatch(this.departmentsActions.setActiveDepartment({ departmentId: data.departmentId }));
        }
    }

    private getData(route: ActivatedRoute) {
        let data = { ...route.snapshot.data };
        if (route.children.length) {
            route.children.forEach(child => data = { ...data, ...this.getData(child) });
        }
        return data;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.ngRedux.dispatch(this.departmentsActions.setActiveDepartment(null));
    }

}
