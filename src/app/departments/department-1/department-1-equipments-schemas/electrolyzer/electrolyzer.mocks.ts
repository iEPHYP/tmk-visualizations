import { Indicator } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';

export let mocks = (equipmentId: number): Indicator[] => {
    if (equipmentId === 109001) {
        return [
            new Indicator({
                'id': '109001',
                'title': 'Bath temperature',
                'value': 665.4000244140625,
                'percentage': 47.857230050223208,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109001,
                'units': 'Degrees C',
                'minValue': 652.0,
                'maxValue': 680.0,
                'status': 1
            }),
            new Indicator({
                'id': '109002',
                'title': 'Level',
                'value': 4.8773206281662027,
                'percentage': 57.311005234718358,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109002,
                'units': 'Деление',
                'minValue': -2.0,
                'maxValue': 10.0,
                'status': 1
            }),
            new Indicator({
                'id': '109003',
                'title': 'Voltage',
                'value': 5.1560001182556157,
                'percentage': 38.90909628434617,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109003,
                'units': 'Вольт',
                'minValue': 4.3,
                'maxValue': 6.5,
                'status': 1
            }),
            new Indicator({
                'id': '109004',
                'title': 'HOV temperature',
                'value': 62.074995040893555,
                'percentage': 45.821421486990793,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109004,
                'units': 'Degrees C',
                'minValue': 30.0,
                'maxValue': 100.0,
                'status': 1
            }),
            new Indicator({
                'id': '109005',
                'title': 'Расход ХОВ',
                'value': 9.11297969523587,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109005,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109006',
                'title': 'Drawdown',
                'value': 1.3,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109006,
                'units': '%',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109007',
                'title': 'Current output',
                'value': 95.03,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109007,
                'units': '%',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109008',
                'title': 'Концентрация',
                'value': 7.0,
                'percentage': -22.222222222222221,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109008,
                'units': '%',
                'minValue': 9.0,
                'maxValue': 18.0,
                'status': 2
            }),
            new Indicator({
                'id': '109011',
                'title': 'Series current',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109011,
                'units': 'кА',
                'minValue': 190.0,
                'maxValue': 230.0,
                'status': 0
            }),
            new Indicator({
                'id': '109012',
                'title': 'Feeding current',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109012,
                'units': 'кА',
                'minValue': 0.0,
                'maxValue': 135.0,
                'status': 0
            }),
            new Indicator({
                'id': '109013',
                'title': 'Сила тока',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109013,
                'units': 'кА',
                'minValue': 190.0,
                'maxValue': 230.0,
                'status': 0
            }),
            new Indicator({
                'id': '109014',
                'title': 'Напряжение на ваннах СРЕДНЕЕ',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109014,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109015',
                'title': 'Напряжение на ваннах ОБЩЕЕ',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109015,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109016',
                'title': 'Снятие нагрузки с электролизеров',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109016,
                'units': 'Время',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109017',
                'title': 'Нарушение технологических режимов элекролизеров по температуре',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109017,
                'units': null,
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109019',
                'title': 'Перекос напряжения на серии',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109019,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 45.0,
                'status': 0
            }),
            new Indicator({
                'id': '109020',
                'title': 'Напряжение на серии среднее',
                'value': null,
                'percentage': null,
                'equipmentId': 109001,
                'equipmentTitle': ' Электролизер № 1',
                'equipmentShortTitle': '',
                'indicatorId': 109020,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            })
        ];
    } else {
        return [
            new Indicator({
                'id': '109001',
                'title': 'Bath temperature',
                'value': 26.5,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109001,
                'units': 'Degrees C',
                'minValue': 652.0,
                'maxValue': 680.0,
                'status': 0
            }),
            new Indicator({
                'id': '109002',
                'title': 'Level',
                'value': -24.7,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109002,
                'units': 'Деление',
                'minValue': -2.0,
                'maxValue': 10.0,
                'status': 0
            }),
            new Indicator({
                'id': '109003',
                'title': 'Voltage',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109003,
                'units': 'Вольт',
                'minValue': 4.3,
                'maxValue': 6.5,
                'status': 0
            }),
            new Indicator({
                'id': '109004',
                'title': 'HOV temperature',
                'value': 16.474997997283936,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109004,
                'units': 'Degrees C',
                'minValue': 30.0,
                'maxValue': 100.0,
                'status': 0
            }),
            new Indicator({
                'id': '109005',
                'title': 'Расход ХОВ',
                'value': 3.5125752289674654,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109005,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109006',
                'title': 'Drawdown',
                'value': 1.27,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109006,
                'units': '%',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109007',
                'title': 'Current output',
                'value': 80.74,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109007,
                'units': '%',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109008',
                'title': 'Концентрация',
                'value': 8.5,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109008,
                'units': '%',
                'minValue': 9.0,
                'maxValue': 18.0,
                'status': 0
            }),
            new Indicator({
                'id': '109011',
                'title': 'Series current',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109011,
                'units': 'кА',
                'minValue': 190.0,
                'maxValue': 230.0,
                'status': 0
            }),
            new Indicator({
                'id': '109012',
                'title': 'Feeding current',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109012,
                'units': 'кА',
                'minValue': 0.0,
                'maxValue': 135.0,
                'status': 0
            }),
            new Indicator({
                'id': '109013',
                'title': 'Сила тока',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109013,
                'units': 'кА',
                'minValue': 190.0,
                'maxValue': 230.0,
                'status': 0
            }),
            new Indicator({
                'id': '109014',
                'title': 'Напряжение на ваннах СРЕДНЕЕ',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109014,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109015',
                'title': 'Напряжение на ваннах ОБЩЕЕ',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109015,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109016',
                'title': 'Снятие нагрузки с электролизеров',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109016,
                'units': 'Время',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109017',
                'title': 'Нарушение технологических режимов элекролизеров по температуре',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109017,
                'units': null,
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '109019',
                'title': 'Перекос напряжения на серии',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109019,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 45.0,
                'status': 0
            }),
            new Indicator({
                'id': '109020',
                'title': 'Напряжение на серии среднее',
                'value': null,
                'percentage': 0.0,
                'equipmentId': 109002,
                'equipmentTitle': ' Электролизер № 2',
                'equipmentShortTitle': '',
                'indicatorId': 109020,
                'units': 'Вольт',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            })
        ];
    }
};