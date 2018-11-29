import * as moment from 'moment';

export class ProductValuesByShiftHourResponseModel {
    Id: number;
    ValueTime: moment.Moment;
    Value: number;
    UpdatedBy: string;
    Comment: string;
    UpdatedAt: moment.Moment;

    constructor(model: Partial<ProductValuesByShiftHourResponseModel> = {}) {
        Object.assign(this, model);
    }
}
