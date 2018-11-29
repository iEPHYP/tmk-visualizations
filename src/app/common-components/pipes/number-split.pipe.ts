import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberSplit'
})
export class NumberSplitPipe implements PipeTransform {

    transform(value: any, splitter = ' ', digitsNumber = 2, defaultValue = '-'): any {
        if (value == null || value === undefined) {
            return defaultValue;
        }
        if (isNaN(value)) {
            return value;
        }
        value = Number.parseFloat(value);
        let str = value.toFixed(digitsNumber);
        str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${splitter}`);
        str = str.replace('.', ',');
        return str;
    }

}
