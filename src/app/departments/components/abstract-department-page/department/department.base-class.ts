import { OnInit, ElementRef, Injector, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as _ from "lodash";
import { Line, Callbacks } from "./department.models";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { Facility } from "./facility-frame/facility-frame.models";
import { LoaderMetadata } from "../../../../shared-components/services/loader-metadata";
import { DepartmentMnemoschemeService } from "../../../services/department-mnemoscheme.service";
import { SettingsService } from "../../../../services/settings.service";
import { LoaderService } from "../../../../shared-components/services/loader.service";
import { HightlighterService } from "../highlights-on-department.service";
import { SchemaClickEvent } from "../../../../core-models/department-schema.models";
import { Block } from "./department-schema-block/department-schema-block.model";
import { Subject } from "rxjs";

export class DepartmentBaseClass implements OnInit, OnDestroy {
    private loader: LoaderMetadata;
    public loaderName = "page-transition-loader";

    protected destroyed = new Subject<boolean>();

    protected departmentId: number;
    protected dateFrom = moment(new Date());
    protected dateTo = moment(new Date());

    protected elem: ElementRef;
    protected service: DepartmentMnemoschemeService;
    protected settings: SettingsService;
    protected router: Router;
    protected route: ActivatedRoute;
    protected loaderService: LoaderService;
    protected highlighterService: HightlighterService;

    public onClicked = ($event: SchemaClickEvent) => {
        if ($event.type === "device") {
            this.router.navigate(["equipment-indicators", $event.id], {
                relativeTo: this.route
            });
        } else if ($event.type === "button") {
            this.router.navigate(["ppr", $event.id], {
                relativeTo: this.route
            });
        }
    };

    public mouseover = (item: Line | Facility) => {
        this.highlighterService.highlightRoutes(item, true);
    };

    public mouseout = (item: Line | Facility) => {
        this.highlighterService.highlightRoutes(item, false);
    };

    public callbacks: Callbacks = new Callbacks({
        onClicked: this.onClicked,
        mouseout: this.mouseout,
        mouseover: this.mouseover
    });

    constructor(
        protected injector: Injector,
        public lines: Line[],
        public facilities: Facility[],
        public topBlocks: Block[] = [],
        public bottomBlocks: Block[] = []
    ) {
        this.loaderService = injector.get(LoaderService);
        this.elem = injector.get<ElementRef>(ElementRef);
        this.service = injector.get<DepartmentMnemoschemeService>(
            DepartmentMnemoschemeService
        );
        this.highlighterService = injector.get<HightlighterService>(
            HightlighterService
        );
        this.settings = injector.get<SettingsService>(SettingsService);
        this.router = injector.get<Router>(Router);
        this.route = injector.get<ActivatedRoute>(ActivatedRoute);
    }

    ngOnInit() {
        this.loader = this.loaderService.setLoading(this.loaderName);

        this.route.data.takeUntil(this.destroyed).subscribe(data => {
            if ("departmentId" in data) {
                this.departmentId = Number.parseInt(data["departmentId"]);
                this.getData();
            }
        });

        this.calendarSettings();

        this.lines.forEach(line => {
            this.highlighterService
                .subscribeToRouteHighlights(line)
                .takeUntil(this.destroyed)
                .subscribe(active => {
                    line.active = active;
                });
        });
    }

    protected getData() {
        Observable.combineLatest(
            this.service.getEquipment(
                this.departmentId,
                this.dateFrom.format("YYYY-MM-DD"),
                this.dateTo.format("YYYY-MM-DD")
            ),
            this.service.getDepartment(
                this.departmentId,
                this.dateFrom.format("YYYY-MM-DD[T]HH:mm:ss"),
                this.dateTo.format("YYYY-MM-DD[T]HH:mm:ss")
            )
        )
            .takeUntil(this.destroyed)
            .subscribe(
                value => {
                    this.merge(value[0], value[1]);
                    this.loader.loaded();
                },
                () => {
                    this.loader.loaded();
                }
            );
    }

    protected merge(facilities: Facility[], blocks: Block[]) {
        this.facilities.forEach(facility => {
            const f = _(facilities).find(d => d.id === facility.id);
            if (f) {
                facility.reassign(f);
                facility.status = f.status;
            }
        });

        [...this.topBlocks, ...this.bottomBlocks].forEach(block => {
            const b = _(blocks).find(item => item.id === block.id);
            if (b) {
                block.reassign(b);
            }
        });
    }

    protected calendarSettings() {
        this.settings.onDatesChanged
            .takeUntil(this.destroyed)
            .subscribe(() => {
                const dates = this.settings.selectedDate;
                if (dates.startDate) {
                    this.dateFrom = dates.startDate;
                    this.dateTo = dates.endDate
                        ? dates.endDate
                        : dates.startDate;
                    this.getData();
                }
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
