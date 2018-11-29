import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable, Optional } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { IFilterListVM } from '../../shared-components/filter-list/filter-list.models';
import { DepartmentsService } from '../departments.service';
import { PivotTableConfiguration, IPivotTableData } from '../../shared-components/pivot-table/pivot-table.models';

export interface IEquipmentIndicator {
    id: number;
    title: string;
    unit: string;
}

export class EquipmentIndicatorsTableVM {
    static readonly DEFAULTS: Partial<EquipmentIndicatorsTableVM> = {
        header: new PivotTableConfiguration(),
        data: null
    };

    data: IPivotTableData;
    header: PivotTableConfiguration;

    constructor(...vms: Partial<EquipmentIndicatorsTableVM>[]) {
        Object.assign(this, EquipmentIndicatorsTableVM.DEFAULTS, ...vms);
    }
}

@Injectable()
export class EquipmentIndicatorsDataSource extends DataSource<IFilterListVM> {

    private subject: Subject<IFilterListVM[]>;
    private departmentId: number;
    private equipmentId: number;
    public data: IFilterListVM<IEquipmentIndicator>[] = [];

    constructor(private service: DepartmentsService) {
        super();
        this.subject = new Subject<IFilterListVM<IEquipmentIndicator>[]>();
    }

    public init(departmentId: number, equipmentId: number) {
        this.departmentId = departmentId;
        this.equipmentId = equipmentId;
        this.loadData();
    }

    private loadData() {

        let dataFirst = [];

        setTimeout(() => {
            let result: any[] = [];
            if (this.equipmentId === 105) {
                result = [[105001, 'Уровень карналлита', 'мм'], [105002, 'Масса карналита в Силосе', 'т']];
            } else if (this.equipmentId === 106001) {
                // tslint:disable-next-line:max-line-length
                result = [[101229, 'Расход хлора в напорной нитке №1 (КХ №1)', 'м3/ч'], [101230, 'Расход хлора в напорной нитке №2 (КХ №1)', 'м3/ч'], [106001, 'Температура Плавильник', 'Градусы С'], [106002, 'Температура ХлорКамера', 'Градусы С'], [106003, 'Температура Миксер', 'Градусы С'], [106004, 'Температура Сливная летка', 'Градусы С'], [106005, 'Разряжение боров 2', 'мм в.ст'], [106006, 'Разряжение боров 1', 'мм в.ст'], [106008, 'Давление хлора в н/н №1 карн.отд.', 'кг/см2'], [106009, 'Давление хлора в н/н №2 карн.отд.', 'кг/см2'], [106101, 'Расход хлора Фурма №1', 'м3/ч'], [106102, 'Давление хлора Фурма №1', 'кг/см2'], [106111, 'Расход хлора Фурма №2', 'м3/ч'], [106112, 'Давление хлора Фурма №2', 'кг/см2']];
            } else if (this.equipmentId === 106003) {
                // tslint:disable-next-line:max-line-length
                result = [[106001, 'Температура Плавильник', 'Градусы С'], [106002, 'Температура ХлорКамера', 'Градусы С'], [106003, 'Температура Миксер', 'Градусы С'], [106004, 'Температура Сливная летка', 'Градусы С'], [106005, 'Разряжение боров 2', 'мм в.ст'], [106006, 'Разряжение боров 1', 'мм в.ст'], [106007, 'Уровень карналита в бункере хлоратора', 'мм'], [106008, 'Давление хлора в н/н №1 карн.отд.', 'кг/см2'], [106009, 'Давление хлора в н/н №2 карн.отд.', 'кг/см2'], [106010, 'Масса карналита в бункере хлоратора', 'т'], [106101, 'Расход хлора Фурма №1', 'м3/ч'], [106102, 'Давление хлора Фурма №1', 'кг/см2'], [106111, 'Расход хлора Фурма №2', 'м3/ч'], [106112, 'Давление хлора Фурма №2', 'кг/см2'], [106201, 'Шнек', 'Гц']];
            } else if (this.equipmentId === 109001 || this.equipmentId === 109002) {
                // tslint:disable-next-line:max-line-length
                result = [[109001, 'Температура ванны', 'Градусы С'], [109002, 'Уровень', 'Деление'], [109003, 'Напряжение', 'Вольт'], [109004, 'Температура ХОВ', 'Градусы С'], [109005, 'Расход ХОВ', 'м3/ч'], [109006, 'Сработка', '%'], [109007, 'Выход по току', '%'], [109008, 'Концентрация', '%'], [109011, 'Ток серии', 'кА'], [109012, 'Ток подпитки', 'кА'], [109013, 'Сила тока', 'кА'], [109014, 'Напряжение на ваннах СРЕДНЕЕ', 'Вольт'], [109015, 'Напряжение на ваннах ОБЩЕЕ', 'Вольт'], [109016, 'Снятие нагрузки с электролизеров', 'Время'], [109017, 'Нарушение технологических режимов элекролизеров по температуре', ''], [109019, 'Перекос напряжения на серии', 'Вольт'], [109020, 'Напряжение на серии среднее', 'Вольт']];
            }
            console.log('result is ', result);

            const data: IFilterListVM<IEquipmentIndicator>[] = [];

            for (let i = 0; i < result.length; i++) {
                const item: IFilterListVM<IEquipmentIndicator> = {
                    data: {
                        id: result[i][0],
                        title: result[i][1],
                        unit: result[i][2]
                    },
                };
                data.push(item);
            }
            this.subject.next(data);
            this.data = data;
            dataFirst = data;
        }, 100);

        // this.service.GetEquipmentIndicators(this.equipmentId).then(result => {

        //     const data: IFilterListVM<IEquipmentIndicator>[] = [];

        //     for (let i = 0; i < result.length; i++) {
        //         const item: IFilterListVM<IEquipmentIndicator> = {
        //             data: {
        //                 id: result[i][0],
        //                 title: result[i][1],
        //                 unit: result[i][2]
        //             },
        //         };
        //         data.push(item);
        //     }
        //     this.subject.next(data);
        //     this.data = data;
        //     dataFirst = data;
        // }).catch((err) => {
        //     console.log('error', err);
        // });
    }

    connect(collectionViewer: CollectionViewer): Observable<IFilterListVM<IEquipmentIndicator>[]> {
        return this.subject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
    }

}
