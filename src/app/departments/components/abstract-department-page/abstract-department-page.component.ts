import { API_URL } from "./../../../constants";
import { Component, OnInit, Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DepartmentMnemoschemeService } from "../../services/department-mnemoscheme.service";
import { SettingsService } from "../../../services/settings.service";
import * as moment from "moment";
import { LoaderService } from "../../../shared-components/services/loader.service";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Property } from "../../../decorators/property";
import { select, NgRedux } from "@angular-redux/store";
import { CalendarState } from "../../../app-state/states/calendar.state";
import { AppState } from "../../../app-state/states/app.state";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Block } from "./department/department-schema-block/department-schema-block.model";
import { Subject } from "rxjs";

@Component({
    selector: "tmk-abstract-department-page", // TODO: rename correspondengly
    templateUrl: "./abstract-department-page.component.html",
    styleUrls: ["./abstract-department-page.component.scss"]
})
export class AbstractDepartmentPageComponent implements OnInit, OnDestroy {

    public blocks: Block[];
    public loaderName = "department-page-loader";
    protected destroyed = new Subject<boolean>();
    protected dateSubscription: Subscription;

    @select() calendarState$: Observable<CalendarState>;

    @Property(AbstractDepartmentPageComponent.INIT_DEPARTMENT)
    public department: number;

    @Property(AbstractDepartmentPageComponent.INIT_DEPARTMENT)
    public startDate: moment.Moment;

    @Property(AbstractDepartmentPageComponent.INIT_DEPARTMENT)
    public endDate: moment.Moment;

    protected router: Router;
    protected route: ActivatedRoute;
    protected service: DepartmentMnemoschemeService;
    protected settings: SettingsService;
    protected loaderService: LoaderService;
    protected ngRedux: NgRedux<AppState>;
    protected apiUrl: string;
    protected http: HttpClient;

    public title = "";

    private static readonly INIT_DEPARTMENT = (
        self: AbstractDepartmentPageComponent
    ) => {};

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.route = injector.get(ActivatedRoute);
        this.service = injector.get(DepartmentMnemoschemeService);
        this.settings = injector.get(SettingsService);
        this.loaderService = injector.get(LoaderService);
        this.ngRedux = injector.get(NgRedux);
        this.router = injector.get(Router);
        this.apiUrl = injector.get<string>(API_URL);
        this.http = injector.get(HttpClient);
    }

    ngOnInit() {
        const state = this.ngRedux.getState();

        if (state.calendarState) {
            this.startDate = state.calendarState.currentStartDate;
            this.endDate = state.calendarState.currentEndDate;
        }

        this.calendarState$.takeUntil(this.destroyed).subscribe(cState => {
            this.startDate = cState.currentStartDate;
            this.endDate = cState.currentEndDate;
        });

        if (state.departmentState) {
            this.department = state.departmentState.departmentId;
        }
    }

    ngOnDestroy(): void {
        this.destroyed.next(true);
    }
}
