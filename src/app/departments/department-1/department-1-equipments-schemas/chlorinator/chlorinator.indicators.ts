import { Indicator } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';

export let defaultIndicatorsLeft: Indicator[] = [
    new Indicator({
        id: '106007',
        title: 'Carnalite level in chlorinator bunker',
        translate: { x: 337, y: 83 }
    }),
    new Indicator({
        id: '106004',
        title: 'Discharge temperature',
        translate: { x: 337, y: 193 }
    }),
    new Indicator({
        id: '106001',
        title: 'Melting Point',
        translate: { x: 337, y: 313 }
    }),
    new Indicator({
        id: '106002',
        title: 'Chlorcamer temperature',
        translate: { x: 337, y: 433 }
    }),
    new Indicator({
        id: '106008',
        title: 'Chlorine pressure in n/n 1 karn.d.',
        translate: { x: 337, y: 543 }
    }), new Indicator({
        id: '106009',
        title: 'Chlorine pressure in n/n 2 carbons.',
        translate: { x: 337, y: 600 }
    }),
    new Indicator({
        id: '101229',
        title: 'Расход хлора в напорной нитке №1 (КХ №1)',
        translate: { x: 337, y: 653 }
    }),
    new Indicator({
        id: '101230',
        title: 'Расход хлора в напорной нитке №2 (КХ №1)',
        translate: { x: 337, y: 708 }
    }),
];

export let defaultIndicatorsRight: Indicator[] = [
    new Indicator({
        id: '106010',
        title: 'Mass of carnalite in chlorinator bunker',
        translate: { x: 1208, y: 93 }
    }),
    new Indicator({
        id: '106201',
        title: 'Шнек',
        translate: { x: 1208, y: 156 }
    }),
    new Indicator({
        id: '106005',
        title: 'Разряжение боров 2',
        translate: { x: 1208, y: 233 }
    }),
    new Indicator({
        id: '106006',
        title: 'Разряжение боров 1',
        translate: { x: 1208, y: 288 }
    }),
    new Indicator({
        id: '106003',
        title: 'Mixer temperature',
        translate: { x: 1208, y: 418 }
    }),
    new Indicator({
        id: '106101',
        title: 'Расход хлора Фурма №1',
        translate: { x: 1208, y: 548 }
    }),
    new Indicator({
        id: '106102',
        title: 'Давление хлора Фурма №1',
        translate: { x: 1208, y: 603 }
    }),
    new Indicator({
        id: '106111',
        title: 'Расход хлора Фурма №2',
        translate: { x: 1208, y: 658 }
    }),
    new Indicator({
        id: '106112',
        title: 'Давление хлора Фурма №2',
        translate: { x: 1208, y: 713 }
    })
];

