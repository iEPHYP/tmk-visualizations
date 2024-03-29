import { Facility } from '../../components/abstract-department-page/department/facility-frame/facility-frame.models';

const rows: number[] = [215, 485];
const columns: number[] = [87, 247, 407, 567, 727];

export let defaultFacilities: Facility[] = [
    new Facility({
        id: 105,
        title: 'Silo towers',
        label: 'A1',
        routes: ['route17', ],
        x: columns[0],
        y: rows[0],
    }),
    new Facility({
        id: 106,
        title: 'Carnalyte Chlorinator',
        label: 'A2',
        routes: ['route4', 'route11', 'route17', ],
        x: columns[1],
        y: rows[0],
    }),
    new Facility({
        id: 109,
        title: 'Electrolyzers',
        label: 'A3',
        routes: ['route7', 'route12', 'route13', 'route14', 'route19', 'route21', 'route22', ],
        x: columns[2],
        y: rows[0],
    }),
    new Facility({
        id: 102,
        title: 'PPR oven',
        label: 'A4',
        routes: ['route9', 'route15', 'route18', ],
        x: columns[3],
        y: rows[0],
    }),
    new Facility({
        id: 103,
        title: 'Magnesium casting plant',
        label: 'A5',
        routes: ['route1', 'route3', 'route8', ],
        x: columns[4],
        y: rows[0],
    }),
    new Facility({
        id: 101,
        title: 'Chlorine compressor',
        label: 'A6',
        routes: ['route5', ],
        x: columns[0],
        y: rows[1],
    }),
    new Facility({
        id: 108,
        title: 'Crystallization mixer',
        label: 'A7',
        routes: ['route6', ],
        x: columns[1],
        y: rows[1],
    }),
    new Facility({
        id: 107,
        title: 'Head mixer',
        label: 'A8',
        routes: ['route21', 'route22', ],
        x: columns[2],
        y: rows[1],
    }),
    new Facility({
        id: 112,
        title: 'Pumps',
        label: 'A9',
        routes: [],
        x: columns[3],
        y: rows[1],
    }),
    new Facility({
        id: 121,
        title: 'Fluoroflopitis casting site',
        label: 'A10',
        routes: ['route10', 'route20', ],
        x: columns[4],
        y: rows[1],
    }),
];
