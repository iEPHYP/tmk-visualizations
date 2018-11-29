import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Facility } from "./facility-frame.models";
import { Callbacks } from "../department.models";
import { SchemaClickEvent } from "../../../../../core-models/department-schema.models";

@Component({
    selector: "g[tmk-facility-frame]",
    templateUrl: "./facility-frame.component.html",
    styleUrls: ["./facility-frame.component.scss"]
})
export class FacilityFrameComponent implements OnInit {
    @Input() facility: Facility;
    @Input() callbacks: Callbacks;

    public onClicked(facility: Facility, type: "button" | "device" | "status") {
        if (facility.has3Levels) {
            this.callbacks.onClicked(new SchemaClickEvent(facility.id, type));
        }
    }

    constructor() {}

    ngOnInit() {}
}
