import { Zone } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/zone/zone.models';

export let defaultZones: Zone[] = [
    new Zone({
        id: 1,
        indicators: ['106007']
    }),
    new Zone({
        id: 2,
        indicators: ['106010']
    }),
    new Zone({
        id: 3,
        indicators: ['106005', '106006']
    }),
    new Zone({
        id: 4,
        indicators: ['106001']
    }),
    new Zone({
        id: 5,
        indicators: ['106002']
    }),
    new Zone({
        id: 6,
        indicators: ['106003']
    }),
    new Zone({
        id: 7,
        indicators: ['106008', '106009', '101229', '101230']
    }),
    new Zone({
        id: 8,
        indicators: ['106101', '106102', '106111', '106112']
    }),
];
