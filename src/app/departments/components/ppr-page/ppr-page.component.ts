import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs/Subject";
import * as _ from "lodash";
import * as moment from "moment";
import { IFilterListVM } from "../../../shared-components/filter-list/filter-list.models";
import { ActivatedRoute, Router } from "@angular/router";
import { equipmentRouteMap } from "./equipment-schema/equipment-schema.routes";
import {
    EquipmentsDataSource,
    Equipment
} from "../../data-sources/equipments.data-source";
import {
    FacilitiesDataSource,
    Facility
} from "../../data-sources/facilities.data-source";
import { NgRedux } from "@angular-redux/store/lib/src/components/ng-redux";
import { AppState } from "../../../app-state/states/app.state";
import { PageActions } from "../../../app-state/actions/page.actions";
import {
    PageType,
    EquipmentIndicatorsPageState
} from "../../../app-state/states/page.state";
import { select } from "@angular-redux/store";
import { DepartmentState } from "../../../app-state/states/department.state";
import { Observable } from "rxjs/Observable";
import { PprPageService } from "./ppr-page.service";
import { Indicator } from "./equipment-schema/equipment-schema-template/indicator-label/indicator-label.models";
import { Modes } from "./ppr-page.models";
import { CalendarState } from "../../../app-state/states/calendar.state";
import { EquipmentIndicatorsDataSource } from "../../data-sources/equipment-indicators.data-source";
import { LoaderService } from "../../../shared-components/services/loader.service";

@Component({
    selector: "tmk-ppr-page",
    templateUrl: "./ppr-page.component.html",
    styleUrls: ["./ppr-page.component.scss"],
    providers: [
        EquipmentIndicatorsDataSource,
        EquipmentsDataSource,
        FacilitiesDataSource
    ]
})
export class PPRPageComponent implements OnInit, OnDestroy {
    /* Режимы (Мнемосхема, Графики, Детальный график) */
    modes = Modes;
    mode = Modes.schema;
    showDetailedChart = false;

    dateFrom = moment(new Date());
    dateTo = moment(new Date());
    departmentId = 0; // Цех
    facilityId = 0; // Установка
    equipmentId = 0; // Оборудование
    indicatorId = 0; // Тех параметр
    forFacility = false; // true если установка должна показать индикаторы всех его оборудовании в одной схеме или у нее нет оборудования

    selectedFacility: IFilterListVM<Facility>;
    selectedEquipment: IFilterListVM<Equipment>;
    selectedIndicator: IFilterListVM<Indicator>;

    private map = equipmentRouteMap;
    private unsubscribe = new Subject<void>();

    @select(["calendarState"]) public readonly calendarState$: Observable<
        CalendarState
    >;
    @select(["departmentState"]) public departmentState$: Observable<
        DepartmentState
    >;

    constructor(
        private ngRedux: NgRedux<AppState>,
        private route: ActivatedRoute,
        private router: Router,
        public facilitiesDataSource: FacilitiesDataSource,
        public equipmentsDataSource: EquipmentsDataSource,
        public indicatorsDataSource: EquipmentIndicatorsDataSource,
        public service: PprPageService,
        private pageActions: PageActions,
        private loaderService: LoaderService
    ) {}

    ngOnInit() {
        Observable.combineLatest(
            this.departmentState$,
            this.calendarState$,
            this.route.params
        )
            .takeUntil(this.unsubscribe)
            .subscribe(data => {
                this.facilityId = +data[2].facilityId || 0;
                this.dateFrom = data[1].currentStartDate.clone();
                this.dateTo = data[1].currentEndDate.clone();

                /** условия правильно если child параметер (scheme | charts) передан  */
                if (this.route.firstChild) {
                    const url = this.route.firstChild.url["_value"];
                    this.equipmentId = +url[1].path || 0;
                    /** из url узнаем показать ли графики или мнемосхему. по умолчанию мнемосхема */
                    if (url[0].path === "charts") {
                        this.mode = Modes.graph;
                    }
                }

                /** Если поменялся Цех, то скачиваем и инициализируем установок и оборудования этого цеха */
                if (this.departmentId !== data[0].departmentId) {
                    this.departmentId = data[0].departmentId;
                    this.initFacilitiesDataSource();
                }
            });
    }

    navigate(mode: number = this.mode) {
        if (this.showDetailedChart) {
            this.router.navigate(
                [
                    "../",
                    this.facilityId,
                    "chart",
                    this.equipmentId,
                    this.indicatorId
                ],
                { relativeTo: this.route }
            );
        } else {
            switch (mode) {
                case Modes.schema:
                    this.router.navigate(
                        [
                            "../",
                            this.facilityId,
                            "schema",
                            this.equipmentId,
                            this.map.get(this.facilityId).route
                        ],
                        { relativeTo: this.route }
                    );
                    break;
                case Modes.graph:
                    this.router.navigate(
                        ["../", this.facilityId, "charts", this.equipmentId],
                        { relativeTo: this.route }
                    );
                    break;
                default:
                    break;
            }
        }
    }

    private setFacility(item: IFilterListVM<any>) {
        if (this.selectedFacility) {
            this.selectedFacility.active = false;
        }

        this.forFacility = item.data && item.data.mainRoute;
        this.facilityId = item.data.id;
        this.selectedFacility = item;
        this.selectedFacility.active = true;

        /** меняем список оборудования */
        this.equipmentsDataSource.init(_(item.data.equipments).clone());

        /** Если у установки нет оборудования, то скачиваем индикаторы. Иначе индикаторы скачется когда выберется оборудование */
        if (
            this.selectedFacility &&
            this.selectedFacility.data.mainRoute &&
            this.selectedFacility.data.equipments.length === 0
        ) {
            this.equipmentId = 0;
            this.initIndicatorsDataSource();
        }
    }

    private setEquipment(item: IFilterListVM<any>) {
        if (this.selectedEquipment) {
            this.selectedEquipment.active = false;
        }

        this.equipmentId = item.data.id;
        this.selectedEquipment = item;
        this.selectedEquipment.active = true;

        this.initIndicatorsDataSource();
    }

    private setIndicator(item: IFilterListVM<any>) {
        if (this.selectedIndicator) {
            this.selectedIndicator.active = false;
        }

        this.indicatorId = item.data.id;
        this.selectedIndicator = item;
        this.selectedIndicator.active = true;

        /** В redux пишем состояние страницы */
        this.ngRedux.dispatch(
            this.pageActions.setPageState(
                PageType.EquipmentIndicatorsPivotTable,
                new EquipmentIndicatorsPageState({
                    activeFacility: this.facilityId,
                    activeEquipment: this.equipmentId,
                    forFacility:
                        this.selectedFacility.data &&
                        this.selectedFacility.data.mainRoute
                })
            )
        );

        /** меняем url здесь, потому что setIndicator вызывается последним */
        this.navigate();
    }

    public click(
        item: IFilterListVM<any>,
        which: "facility" | "equipment" | "status" | "indicator"
    ) {
        this.loaderService.setLoading(LoaderService.PPR_PAGE_LOADER);
        console.log("click", which);
        if (which === "facility" && +item.data.id !== this.facilityId) {
            this.setFacility(item);
        } else if (
            which === "equipment" &&
            +item.data.id !== this.equipmentId
        ) {
            this.setEquipment(item);
        } else if (
            which === "indicator" &&
            +item.data.indicatorId !== this.indicatorId
        ) {
            this.setIndicator(item);
        }
    }

    private initFacilitiesDataSource() {
        this.facilitiesDataSource.init(this.departmentId);
    }

    private initIndicatorsDataSource() {
        this.indicatorsDataSource.init(
            this.departmentId,
            this.forFacility ? this.facilityId : this.equipmentId
        );
    }

    selectIndicator(indicatorId: number, equipmentId: number) {
        this.showDetailedChart = true;

        if (
            this.selectedFacility.data &&
            this.selectedFacility.data.mainRoute &&
            this.equipmentsDataSource.data.length > 0
        ) {
            this.indicatorId = indicatorId;
            const equipment = _.find(
                this.equipmentsDataSource.data,
                e => +e.data.id === +equipmentId
            );
            this.setEquipment(equipment);
        } else {
            const indicator = _.find(
                this.indicatorsDataSource.data,
                i => +i.data.id === +indicatorId
            );
            this.setIndicator(indicator);
        }
    }

    closeIndicator() {
        this.showDetailedChart = false;
        this.navigate();
    }

    selectDefaultFacility = (items: IFilterListVM[]) => {
        const facility = items.find(item => item.data.id === this.facilityId);
        this.setFacility(facility);
        return facility;
    };

    selectDefaultEquipment = (items: IFilterListVM[]) => {
        const equipment =
            items.find(item => item.data.id === this.equipmentId) || items[0];
        this.setEquipment(equipment);
        return equipment;
    };

    selectDefaultIndicator = (items: IFilterListVM[]) => {
        const indicator =
            items.find(item => item.data.id === this.indicatorId) || items[0];
        this.setIndicator(indicator);
        return indicator;
    };

    public goBack() {
        this.router.navigateByUrl("/");
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
