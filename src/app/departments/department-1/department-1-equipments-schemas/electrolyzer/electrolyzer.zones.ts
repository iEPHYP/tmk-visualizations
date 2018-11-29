import { Zone } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/zone/zone.models';

export let defaultZones: Zone[] = [
    new Zone({
        id: 1,
        indicators: ['109008', '109018', '109005', '109004']
    }),
    new Zone({
        id: 2,
        indicators: ['109006', '109011', '109012', '109020', '109007']
    }),
    new Zone({
        id: 3,
        indicators: ['109009', '109010']
    })
];
