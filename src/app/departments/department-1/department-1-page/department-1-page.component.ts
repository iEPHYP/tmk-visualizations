import { Component, OnInit, Injector } from '@angular/core';
import * as _ from 'lodash';
import { AbstractDepartmentPageComponent } from '../../components/abstract-department-page/abstract-department-page.component';

@Component({
    selector: 'tmk-department-1-page',
    templateUrl: './department-1-page.component.html',
    styleUrls: ['./department-1-page.component.scss']
})
export class Department1PageComponent extends AbstractDepartmentPageComponent implements OnInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
        this.title = 'Цех № 1 - Магниевое производство';
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
