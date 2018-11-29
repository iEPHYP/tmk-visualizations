import { Component, OnInit, Input } from '@angular/core';
import { Frame } from './frame.models';

@Component({
    selector: 'g[tmk-frame]',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

    @Input() frame: Frame;

    constructor() { }

    ngOnInit() {
    }

}
