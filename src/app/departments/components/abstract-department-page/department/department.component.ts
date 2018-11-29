import { Component, Input } from '@angular/core';
import { Facility } from './facility-frame/facility-frame.models';
import { Line, Callbacks } from './department.models';
import { Block } from './department-schema-block/department-schema-block.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'g[tmk-department]',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

    @Input() public facilities: Facility[] = [];
    @Input() public lines: Line[] = [];
    @Input() public topBlocks: Block[] = [];
    @Input() public bottomBlocks: Block[] = [];
    @Input() public callbacks: Callbacks = new Callbacks();

    constructor() {}

}
