import { Block } from '../../components/abstract-department-page/department/department-schema-block/department-schema-block.model';

const rows: number[] = [0, 685];

export let defaultTopBlocks: Block[] = [
    new Block({
        id: '59',
        title: 'Воздух',
        x: 118,
        y: rows[0],
        color: '#072620',
        routes: [],
        units: '',
        input: 234,
        output: 1134,
        destination: 'Цех 3'
    }),
    new Block({
        id: '60',
        title: 'Вода',
        x: 194,
        y: rows[0],
        color: '#072620',
        routes: [],
        units: '',
        input: 11234,
        output: 6712,
        destination: 'Цех 3'
    }),
    new Block({
        id: '54',
        title: 'ЭЭ',
        x: 270,
        y: rows[0],
        color: '#072620',
        routes: [],
        units: '',
        input: 8765,
        output: 946,
        destination: 'Цех 3'
    }),
    new Block({
        id: '9',
        title: 'Товарный магний',
        x: 353.7,
        y: rows[0],
        routes: ['route1', ],
        units: '',
        input: 37834,
        output: 2473,
        destination: 'Цех '
    }),
    new Block({
        id: '171',
        title: 'Магниевые клинья и отливки',
        x: 429.7,
        y: rows[0],
        routes: ['route3', ],
        units: 'м3',
        progress: [10, 20],
        input: 300.5,
        output: 230.7,
        destination: 'Цех 3'
    }),
    new Block({
        id: '3',
        title: 'Cl2',
        x: 513.4,
        y: rows[0],
        routes: ['route4', 'route5', ],
        units: '',
        input: 647,
        output: 34662,
        destination: 'Цех 1'
    }),
    new Block({
        id: '4',
        title: 'Отработанный хлоркалий электролит',
        x: 589.8,
        y: rows[0],
        routes: ['route6', 'route7', ],
        units: '',
        input: 9786,
        output: 67854,
        destination: 'Цех 1'
    }),
    new Block({
        id: '10',
        title: 'Mg восст.',
        x: 665.8,
        y: rows[0],
        routes: ['route8', 'route9', ],
        units: '',
        input: 9758,
        output: 89585,
        destination: 'Цех 1'
    }),
    new Block({
        id: '6282',
        title: 'Фторфлогопитовые изделия',
        x: 741.8,
        y: rows[0],
        routes: ['route10', ],
        units: '',
        input: 4567,
        output: 7523,
        destination: 'Цех 1'
    }),
];

export let defaultBottomBlocks: Block[] = [
    new Block({
        id: '88',
        title: 'Кислые стоки',
        x: 0,
        y: rows[1],
        routes: [],
        color: '#2B2421',
        units: '',
        input: 5432,
        output: 5345,
        destination: 'Цех 9'
    }),
    new Block({
        id: '89',
        title: 'Газоочистка',
        x: 76,
        y: rows[1],
        routes: [],
        color: '#2B2421',
        units: '',
        input: 775,
        output: 5436,
        destination: 'Цех 9'
    }),
    new Block({
        id: '86',
        title: 'Коммерческие отходы',
        x: 152,
        y: rows[1],
        routes: [],
        color: '#2B2421',
        units: '',
        input: 6675,
        output: 3363,
        destination: 'Цех 9'
    }),
    new Block({
        id: '87',
        title: 'Отходы производства',
        x: 228.3,
        y: rows[1],
        routes: [],
        color: '#2B2421',
        units: '',
        input: 80086,
        output: 7667,
        destination: 'Цех 9'
    }),
    new Block({
        id: '13',
        title: 'Безводный карналлит',
        x: 312.2,
        y: rows[1],
        routes: ['route11', 'route12', ],
        units: '',
        input: 9986,
        output: 99855,
        destination: 'Цех 2'
    }),
    new Block({
        id: '1',
        title: 'MgCl2',
        x: 388.2,
        y: rows[1],
        routes: ['route13', ],
        units: '',
        input: 11356,
        output: 4332,
        destination: 'Цех 2'
    }),
    new Block({
        id: '6',
        title: 'Mg-сырец',
        x: 464.3,
        y: rows[1],
        routes: ['route14', 'route15', ],
        units: '',
        input: 55632,
        output: 565245,
        destination: 'Цех 2'
    }),
    new Block({
        id: '2',
        title: 'Обез. карн.',
        x: 548.3,
        y: rows[1],
        routes: ['route17', ],
        units: '',
        input: 22345,
        output: 5523,
        destination: 'Цех 2'
    }),
    new Block({
        id: '21',
        title: 'Аргон',
        x: 624.3,
        y: rows[1],
        routes: ['route18', ],
        units: '',
        input: 23,
        output: 32,
        destination: 'Цех 6'
    }),
    new Block({
        id: '5',
        title: 'NaCl',
        x: 700.2,
        y: rows[1],
        routes: ['route19', ],
        units: '',
        input: 55,
        output: 54,
        destination: 'Цех 6'
    }),
    new Block({
        id: '6283',
        title:  'Шихта',
        x: 776.2,
        y: rows[1],
        routes: ['route20', ],
        units: '',
        input: 64,
        output: 46,
        destination: 'Цех 6'
    }),
    new Block({
        // tslint:disable-next-line:max-line-length
        id: '6001|6002|6003|6004|6005|6006|6007|6008|6009|6010|6011|6012|6013|6014|6015|6016|6017|6018|6019|6020|6021|6022|6023|6024|6025|6026|6027|6028|6029|6030|6031|6032|6033|6034|6035|6036|6037|6038|6039|6040|6041|6042|6043|6044|6045|6046|6047|6048|6049|6050|6051|6052|6053|6054|6055|6056|',
        title: 'Доп материалы',
        x: 859.8,
        y: rows[1],
        routes: [],
        disabled: true,
    }),
];
