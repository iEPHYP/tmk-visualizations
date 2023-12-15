import { Indicator } from '../../../components/ppr-page/equipment-schema/equipment-schema-template/indicator-label/indicator-label.models';

export let mocks = (equipmentId: number): Indicator[] => {
    if (equipmentId === 106001) {
        return [
            new Indicator({
                'id': '101229',
                'title': 'Расход хлора в напорной нитке №1 (КХ №1)',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 101229,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 0
            }),
            new Indicator({
                'id': '101230',
                'title': 'Расход хлора в напорной нитке №2 (КХ №1)',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 101230,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 0
            }),
            new Indicator({
                'id': '106001',
                'title': 'Melting Point',
                'value': 533.28000545501709,
                'percentage': 65.0341470067094,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106001,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 820.0,
                'status': 1
            }),
            new Indicator({
                'id': '106002',
                'title': 'Chlorcamer temperature',
                'value': 804.7599983215332,
                'percentage': 98.141463209943083,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106002,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 820.0,
                'status': 1
            }),
            new Indicator({
                'id': '106003',
                'title': 'Mixer temperature',
                'value': 714.78001594543457,
                'percentage': 95.304002126057938,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106003,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 750.0,
                'status': 1
            }),
            new Indicator({
                'id': '106004',
                'title': 'Discharge temperature',
                'value': 338.58000755310059,
                'percentage': null,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106004,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106005',
                'title': 'Разряжение боров 2',
                'value': 6.2599998712539673,
                'percentage': 112.99999356269836,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106005,
                'units': 'мм в.ст',
                'minValue': 4.0,
                'maxValue': 6.0,
                'status': 1
            }),
            new Indicator({
                'id': '106006',
                'title': 'Разряжение боров 1',
                'value': 6.3200002908706674,
                'percentage': 116.00001454353337,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106006,
                'units': 'мм в.ст',
                'minValue': 4.0,
                'maxValue': 6.0,
                'status': 1
            }),
            new Indicator({
                'id': '106008',
                'title': 'Chlorine pressure in n/n 1 karn.d.',
                'value': 1.0127999782562256,
                'percentage': 51.279997825622559,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106008,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 1.5,
                'status': 1
            }),
            new Indicator({
                'id': '106009',
                'title': 'Chlorine pressure in n/n 2 carbons.',
                'value': 0.79199999570846558,
                'percentage': 29.199999570846558,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106009,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 1.5,
                'status': 1
            }),
            new Indicator({
                'id': '106101',
                'title': 'Расход хлора Фурма №1',
                'value': 42.020001411437988,
                'percentage': 28.013334274291992,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106101,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 1
            }),
            new Indicator({
                'id': '106102',
                'title': 'Давление хлора Фурма №1',
                'value': 0.51959999799728385,
                'percentage': null,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106102,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106111',
                'title': 'Расход хлора Фурма №2',
                'value': 4.0599998831748962,
                'percentage': 2.7066665887832642,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106111,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 1
            }),
            new Indicator({
                'id': '106112',
                'title': 'Давление хлора Фурма №2',
                'value': 0.56399999856948857,
                'percentage': null,
                'equipmentId': 106001,
                'equipmentTitle': 'Хлоратор №1',
                'equipmentShortTitle': '',
                'indicatorId': 106112,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 0.0,
                'status': 0
            })
        ];
    } else {
        return [
            new Indicator({
                'id': '106001',
                'title': 'Melting Point',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106001,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 820.0,
                'status': 0
            }),
            new Indicator({
                'id': '106002',
                'title': 'Chlorcamer temperature',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106002,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 820.0,
                'status': 0
            }),
            new Indicator({
                'id': '106003',
                'title': 'Mixer temperature',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106003,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 750.0,
                'status': 0
            }),
            new Indicator({
                'id': '106004',
                'title': 'Discharge temperature',
                'value': 0.0,
                'percentage': null,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106004,
                'units': 'Degrees C',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106005',
                'title': 'Разряжение боров 2',
                'value': 0.0,
                'percentage': -200.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106005,
                'units': 'мм в.ст',
                'minValue': 4.0,
                'maxValue': 6.0,
                'status': 2
            }),
            new Indicator({
                'id': '106006',
                'title': 'Разряжение боров 1',
                'value': 0.0,
                'percentage': -200.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106006,
                'units': 'мм в.ст',
                'minValue': 4.0,
                'maxValue': 6.0,
                'status': 2
            }),
            new Indicator({
                'id': '106007',
                'title': 'Carnalite level in chlorinator bunker',
                'value': -2502.5000001187436,
                'percentage': null,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106007,
                'units': 'мм',
                'minValue': 0.0,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106008',
                'title': 'Chlorine pressure in n/n 1 karn.d.',
                'value': 1.0127999782562256,
                'percentage': 51.279997825622559,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106008,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 1.5,
                'status': 1
            }),
            new Indicator({
                'id': '106009',
                'title': 'Chlorine pressure in n/n 2 carbons.',
                'value': 0.79199999570846558,
                'percentage': 29.199999570846558,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106009,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 1.5,
                'status': 1
            }),
            new Indicator({
                'id': '106010',
                'title': 'Mass of carnalite in chlorinator bunker',
                'value': 55.319360466282326,
                'percentage': 345.74600291426452,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106010,
                'units': 'т',
                'minValue': 0.0,
                'maxValue': 16.0,
                'status': 1
            }),
            new Indicator({
                'id': '106101',
                'title': 'Расход хлора Фурма №1',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106101,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 0
            }),
            new Indicator({
                'id': '106102',
                'title': 'Давление хлора Фурма №1',
                'value': 0.0,
                'percentage': null,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106102,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106111',
                'title': 'Расход хлора Фурма №2',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106111,
                'units': 'м3/ч',
                'minValue': 0.0,
                'maxValue': 150.0,
                'status': 0
            }),
            new Indicator({
                'id': '106112',
                'title': 'Давление хлора Фурма №2',
                'value': 0.0,
                'percentage': null,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106112,
                'units': 'кг/см2',
                'minValue': 0.5,
                'maxValue': 0.0,
                'status': 0
            }),
            new Indicator({
                'id': '106201',
                'title': 'Шнек',
                'value': 0.0,
                'percentage': 0.0,
                'equipmentId': 106003,
                'equipmentTitle': 'Хлоратор №3',
                'equipmentShortTitle': '',
                'indicatorId': 106201,
                'units': 'Гц',
                'minValue': 0.0,
                'maxValue': 60.0,
                'status': 0
            })
        ];
    }
};
