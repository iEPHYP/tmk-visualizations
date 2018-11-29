import { Component, Injector } from '@angular/core';
import { DepartmentBaseClass } from '../../components/abstract-department-page/department/department.base-class';
import { defaultLines } from './department-1-schema.lines';
import { defaultFacilities } from './department-1-schema.facilities';
import { defaultTopBlocks, defaultBottomBlocks } from './department-1-schema.blocks';

@Component({
    selector: 'tmk-department-1-schema',
    templateUrl: './department-1-schema.component.html',
    styleUrls: ['./department-1-schema.component.scss'],

})
export class Department1SchemaComponent extends DepartmentBaseClass {

    constructor(
        protected injector: Injector
    ) {
        super(injector, defaultLines, defaultFacilities, defaultTopBlocks, defaultBottomBlocks);
    }

}
