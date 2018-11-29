import {
    Component,
    OnInit,
    Input,
    OnDestroy,
    HostListener
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Block } from "./department-schema-block.model";
import { HightlighterService } from "../../highlights-on-department.service";
import { Subject } from "rxjs";

@Component({
    selector: "g[tmk-department-schema-block]", // TODO: rename correspondengly
    templateUrl: "./department-schema-block.component.html",
    styleUrls: ["./department-schema-block.component.scss"]
})
export class DepartmentSchemaBlockComponent implements OnInit, OnDestroy {
    public active: boolean;
    protected destroyed = new Subject<boolean>();

    @Input() public config: Block;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private highlighterService: HightlighterService
    ) {}

    ngOnInit() {
        this.highlighterService
            .subscribeToRouteHighlights(this.config)
            .takeUntil(this.destroyed)
            .subscribe(active => {
                this.active = active;
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public highlight(active: boolean) {
        this.active = active;
        this.highlighterService.highlightRoutes(this.config, active);
    }

    @HostListener("mouseenter")
    public mouseEnterHandler() {
        this.highlight(true);
    }

    @HostListener("mouseleave")
    public mouseLeaveHandler() {
        this.highlight(false);
    }
}
