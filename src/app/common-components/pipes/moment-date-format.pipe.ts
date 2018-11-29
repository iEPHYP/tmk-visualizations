import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentDateFormat'
})
export class MomentDateFormatPipe implements PipeTransform {

    transform(value: moment.Moment, format: string): any {
        if (value) {
            return value.format(format);
        }
    }

}
