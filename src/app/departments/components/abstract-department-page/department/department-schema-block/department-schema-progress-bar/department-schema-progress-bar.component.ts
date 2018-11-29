import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tmk-department-schema-progress-bar',
    templateUrl: './department-schema-progress-bar.component.html',
    styleUrls: ['./department-schema-progress-bar.component.scss']
})
export class DepartmentSchemaProgressBarComponent implements OnInit {

    @Input() progress: [number] | [number, number];
    @Input() borders: number[] = [50, 70];

    constructor() { }

    ngOnInit() {
    }

}
