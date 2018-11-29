export enum PageType {
    EquipmentIndicatorsPivotTable = 1
}

export class BasePageState {
    constructor(...states: Partial<BasePageState>[]) {
        Object.assign(this, ...states);
    }
}
export type BasePageStateConstructor = typeof BasePageState;

export class EquipmentIndicatorsPageState extends BasePageState {

    static readonly DEFAULTS: Partial<EquipmentIndicatorsPageState> = {

    };

    activeFacility: number;
    activeEquipment: number;
    activeIndicator: number;
    forFacility = false;


    constructor(...pageStates: Partial<EquipmentIndicatorsPageState>[]) {
        super();
        Object.assign(this, EquipmentIndicatorsPageState.DEFAULTS, ...pageStates);
    }
}


export const PAGE_STATES_MAP = new Map<PageType, BasePageStateConstructor>([
    [PageType.EquipmentIndicatorsPivotTable, EquipmentIndicatorsPageState]
]);

export class PageState {
    public pageType: PageType;
    public pageState: BasePageState;

    constructor(...pageStates: Partial<PageState>[]) {
        Object.assign(this, ...pageStates);

        if (this.pageType == null) {
            return;
        }

        const pageStateConstructor = PAGE_STATES_MAP.get(this.pageType);
        this.pageState = new pageStateConstructor(this.pageState);
    }
}
