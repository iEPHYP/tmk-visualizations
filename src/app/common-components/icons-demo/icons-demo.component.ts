import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tmk-icons-demo',
    templateUrl: './icons-demo.component.html',
    styleUrls: ['./icons-demo.component.scss']
})
export class IconsDemoComponent implements OnInit {

    icons = [
        'tmk:calc',
        'tmk:check-list',
        'tmk:close',
        'tmk:shrink',
        'tmk:document',
        'tmk:folder',
        'tmk:document-pen',
        'tmk:filter',
        'tmk:product',
        'tmk:dashboard',
        'tmk:clock',
        'tmk:graph',
        'tmk:arrow-shrink',
        'tmk:arrow-expand',
        'tmk:info',
        'tmk:arrow-top',
        'tmk:arrow-bottom',
        'tmk:exclamation-triangle-3',
        'tmk:symbol-m',
        'tmk:exclamation-triangle',
        'tmk:clock-2',
        'tmk:exclamation-triangle-2',
        'tmk:reload',
        'tmk:tick-in-circle',
        'tmk:chevron-down',
        'tmk:reload2',
        'tmk:reload3',
        'tmk:reload4',
        'tmk:chevron-down-thin',
        'tmk:calc-rect',
        'tmk:folded-doc',
        'tmk:person',
        'tmk:table',
        'tmk:chart',
        'tmk:folded-doc-list',
    ];

    constructor() { }

    ngOnInit() {
    }

}
