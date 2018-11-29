import { Component, OnInit, Input } from '@angular/core';
import { Zone } from './zone.models';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'g[tmk-zone]',
    templateUrl: './zone.component.html',
    styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

    @Input() zone: Zone;

    constructor() { }

    ngOnInit() {
    }

}
