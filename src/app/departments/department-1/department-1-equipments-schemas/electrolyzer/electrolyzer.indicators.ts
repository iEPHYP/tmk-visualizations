import { Indicator } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';

// 109001
export let defaultIndicatorsLeft: Indicator[] = [
    new Indicator({
        id: '109001',
        title: 'Температура ванны',
        translate: {
            x: 371,
            y: 111
        }
    }),
    new Indicator({
        id: '109006',
        title: 'Сработка',
        translate: {
            x: 371,
            y: 192
        }
    }),
    new Indicator({
        id: '109011',
        title: 'Ток серии',
        translate: {
            x: 371,
            y: 272
        }
    }),
    new Indicator({
        id: '109020',
        title: 'Напряжение на серии среднее',
        translate: {
            x: 371,
            y: 352
        }
    }),
    new Indicator({
        id: '109012',
        title: 'Ток подпитки',
        translate: {
            x: 371,
            y: 432
        }
    }),
    new Indicator({
        id: '109007',
        title: 'Выход по току',
        translate: {
            x: 371,
            y: 512
        }
    }),
    new Indicator({
        id: '109014',
        title: 'Напряжение на ваннах СРЕДНЕЕ',
        translate: {
            x: 371,
            y: 592
        }
    }),
    new Indicator({
        id: '109015',
        title: 'Напряжение на ваннах ОБЩЕЕ',
        translate: {
            x: 371,
            y: 672
        }
    }),
    new Indicator({
        id: '109002',
        title: 'Уровень',
        translate: {
            x: 371,
            y: 762
        }
    }),
    new Indicator({
        id: '109003',
        title: 'Напряжение',
        translate: {
            x: 371,
            y: 842
        }
    })
];

export let defaultIndicatorsRight: Indicator[] = [
    new Indicator({
        id: '109013',
        title: 'Сила тока',
        translate: {
            x: 1183,
            y: 111
        }
    }),
    new Indicator({
        id: '109016',
        title: 'Снятие нагрузки с электролизеров',
        translate: {
            x: 1183,
            y: 191
        }
    }),
    new Indicator({
        id: '109009',
        title: 'Разряжение на газоочистку №2',
        translate: {
            x: 1183,
            y: 272
        }
    }),
    new Indicator({
        id: '109010',
        title: 'Разряжение на газоочистку №3',
        translate: {
            x: 1183,
            y: 352
        }
    }),
    new Indicator({
        id: '109008',
        title: 'Концентрация',
        translate: {
            x: 1183,
            y: 432
        }
    }),
    new Indicator({
        id: '109004',
        title: 'Температура ХОВ',
        translate: {
            x: 1183,
            y: 514.5
        }
    }),
    new Indicator({
        id: '109005',
        title: 'Расход ХОВ',
        translate: {
            x: 1183,
            y: 592
        }
    }),
    new Indicator({
        id: '109018',
        title: 'Изоляция в корпусе электролиза',
        translate: {
            x: 1183,
            y: 672
        }
    }),
    new Indicator({
        id: '109017',
        title: 'Нарушение технологических режимов элекролизеров по температуре',
        translate: {
            x: 1183,
            y: 761
        }
    }),
    new Indicator({
        id: '109019',
        title: 'Перекос напряжения на серии',
        translate: {
            x: 1183,
            y: 841
        }
    }),
];
