export enum EquipmentType {
    Chlorine_Compressor,
    Continuous_Refining_Oven,
    Electrolyzers,
    Magnesium_Casting_Plant,
    Zero_Oven,
    Heating_System,
    Silo_Towers,
    Chlorinator,
    Head_Mixer,
    Crystallizer_Mixer,
    Pumping
}

export class SchemaClickEvent {
    constructor(
        public id: number,
        public type: 'button' | 'device' | 'status'
    ) {}
}

export class SchemaProductClickEvent {
    constructor(
        public productId: string
    ) {}
}
