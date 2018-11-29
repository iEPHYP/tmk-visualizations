import { OnDestroy, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentSchemaService } from './equipment-schema.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Indicator } from './equipment-schema-template/indicator-label/indicator-label.models';
import { LoaderService } from '../../../../shared-components/services/loader.service';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import { SettingsService } from '../../../../services/settings.service';
import { Zone } from './equipment-schema-template/zone/zone.models';
import { Frame } from './equipment-schema-template/frame/frame.models';
import { PPRPageComponent } from '../ppr-page.component';
import { select } from '@angular-redux/store';
import { PageState, EquipmentIndicatorsPageState, PageType } from '../../../../app-state/states/page.state';

export abstract class EquipmentSchemaBaseClass implements OnDestroy {

    @select() public pageState$: Observable<PageState>;

    public equipmentId = 0;
    public facilityId = 0;
    public forFacility = false;
    protected date = moment(new Date());
    public titleWidth = 200;

    private baseHeight = 929;
    private baseWidth = 1545;
    private baseWidthOnOnlyFacility = 1725;

    protected get items(): Indicator[] {
        return [...this.leftLabels, ...this.rightLabels];
    }

    public leftLabels: Indicator[] = [];
    public rightLabels: Indicator[] = [];
    public zones: Zone[] = [];
    public frames: Frame[] = [];

    protected route: ActivatedRoute;
    protected service: EquipmentSchemaService;
    protected loaderService: LoaderService;
    protected settings: SettingsService;
    protected pprPage: PPRPageComponent;

    private destroyed = new Subject<void>();

    constructor(
        protected injector: Injector
    ) {
        this.loaderService = injector.get<LoaderService>(LoaderService);
        const loader = this.loaderService.setLoading(LoaderService.PPR_PAGE_LOADER);

        this.route = injector.get<ActivatedRoute>(ActivatedRoute);
        this.service = injector.get<EquipmentSchemaService>(EquipmentSchemaService);
        this.settings = injector.get<SettingsService>(SettingsService);
        this.pprPage = injector.get<PPRPageComponent>(PPRPageComponent);

        this.pageState$
            .takeUntil(this.destroyed)
            .subscribe(state => {
                if (state.pageState instanceof EquipmentIndicatorsPageState && state.pageType === PageType.EquipmentIndicatorsPivotTable) {
                    const pageState = state.pageState as EquipmentIndicatorsPageState;
                    this.equipmentId = pageState.activeEquipment;
                    this.facilityId = pageState.activeFacility;
                    this.forFacility = pageState.forFacility;
                    this.baseWidth = this.equipmentId ? this.baseWidth : this.baseWidthOnOnlyFacility;

                    this.setDefaults();
                    this.getData();
                }
            });

        Observable.interval(120000)
            .takeUntil(this.destroyed)
            .subscribe(time => {
                this.getData();
            });

        this.calendarSettings();
    }

    protected abstract setDefaults();

    protected abstract getMocks(): Indicator[];

    protected getData() {
        this.fakeDataGetter();
    }

    private fakeDataGetter() {
        const loader = this.loaderService.setLoading(LoaderService.PPR_PAGE_LOADER);

        setTimeout(() => {
            const itemsToRemove: Indicator[] = [];
            this.items.forEach(item => {
                const indicator = _(this.getMocks()).find(d => d.id === item.id);
                if (indicator) {
                    item.originTitle = indicator.title;
                    item.title = indicator.title +
                        (item.number ? ` №${item.number}` : '') +
                        (indicator.units ? ` (${indicator.units})` : '');
                    item.units = indicator.units;
                    item.equipmentId = indicator.equipmentId;
                    item.indicatorId = indicator.indicatorId;
                    item.equipmentShortTitle = indicator.equipmentShortTitle;
                    item.value = indicator.value;
                    item.minValue = indicator.minValue;
                    item.maxValue = indicator.maxValue;
                    item.percentage = _.isNil(indicator.percentage) ? null : Math.round(indicator.percentage);
                    item.status = indicator.status;
                    item.visible = true;
                } else {
                    item.visible = false;
                }

                this.postprocessData();
                loader.stop();
            });
        }, 500);
    }

    private realDataGetter() {
        const loader = this.loaderService.setLoading(LoaderService.PPR_PAGE_LOADER);

        this.service.getIndicators(
            !this.forFacility ? this.equipmentId : this.facilityId,
            this.forFacility,
            this.date.format('YYYY-MM-DD')
        )
            .takeUntil(this.destroyed)
            .subscribe(data => {
                const itemsToRemove: Indicator[] = [];
                this.items.forEach(item => {
                    const indicator = _(data).find(d => d.id === item.id);
                    if (indicator) {
                        item.originTitle = indicator.title;
                        item.title = indicator.title +
                            (item.number ? ` №${item.number}` : '') +
                            (indicator.units ? ` (${indicator.units})` : '');
                        item.units = indicator.units;
                        item.equipmentId = indicator.equipmentId;
                        item.indicatorId = indicator.indicatorId;
                        item.equipmentShortTitle = indicator.equipmentShortTitle;
                        item.value = indicator.value;
                        item.minValue = indicator.minValue;
                        item.maxValue = indicator.maxValue;
                        item.percentage = _.isNil(indicator.percentage) ? null : Math.round(indicator.percentage);
                        item.status = indicator.status;
                        item.visible = true;
                    } else {
                        item.visible = false;
                    }
                });

                this.postprocessData();
                loader.stop();
            });
    }

    protected calendarSettings() {
        this.settings.onDatesChanged
            .takeUntil(this.destroyed)
            .subscribe(() => {
                const dates = this.settings.selectedDate;
                if (dates.startDate) {
                    this.date = dates.startDate;
                    this.getData();
                }
            });
    }

    public selectIndicator(indicatorId: number, equipmentId: number) {
        this.pprPage.selectIndicator(indicatorId, equipmentId);
    }

    protected postprocessData() {
        this.zones.forEach(zone => {
            let indicatorsCount = 0;
            zone.indicators.forEach(indicatorId => {
                const indicator = this.items.find(i => i.id === indicatorId);
                if (indicator) {
                    if (indicator.visible) {
                        indicatorsCount++;
                    }
                    if (
                        indicator.percentage &&
                        (indicator.percentage < 0 || indicator.percentage > 100)
                    ) {
                        zone.critical = true;
                    }
                }
            });

            if (indicatorsCount === 0) {
                zone.visible = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

}
