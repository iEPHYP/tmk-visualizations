import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'periodType'
})
export class PeriodTypePipe implements PipeTransform {

    transform(value: Date, periodType: string): any {
        // value = moment(value);
        if (value) {
            switch (periodType) {
                case 'minutes':
                    return moment(value).format('HH:mm');            
                case 'hours':
                    return moment(value).format('DD HH');            
                case 'days':
                    return moment(value).format('MM.DD');            
                case 'months':
                    return moment(value).format('MM.YY');            
                case 'years':
                    return moment(value).format('YYYY');            
                default:
                    break;
            }
        }
    }

}
