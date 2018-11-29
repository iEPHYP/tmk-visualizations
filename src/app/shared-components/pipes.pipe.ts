import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'take'
})
export class TakePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value.slice(0, args[0]);
    }

}
