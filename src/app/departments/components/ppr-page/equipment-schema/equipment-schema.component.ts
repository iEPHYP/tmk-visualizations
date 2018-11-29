import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equipmentRouteMap } from './equipment-schema.routes';
import { LoaderService } from '../../../../shared-components/services/loader.service';

@Component({
    selector: 'tmk-equipment-schema',
    templateUrl: './equipment-schema.component.html',
    styleUrls: ['./equipment-schema.component.scss']
})
export class EquipmentSchemaComponent implements OnInit {

    public loaderName = LoaderService.PPR_PAGE_LOADER;

    constructor() { }

    ngOnInit() { }

}
