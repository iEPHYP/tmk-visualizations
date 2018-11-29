import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberShort'
})
export class NumberShortPipe implements PipeTransform {

  transform(value: number, splitter = ' ', digitsNumber = 2, defaultValue = '-'): any {
    if (value == null || value === undefined) {
        return defaultValue;
    }
    if (isNaN(value)) {
        return value;
    }
    value = Number.parseFloat(value.toString());
    let str = '';

    if (value < 1000) {
      str = value.toFixed(digitsNumber);
    } else if (value < 100000) {
      str = (value / 1000).toFixed(digitsNumber) + 'к';
    } else {
      str = (value / 1000000).toFixed(digitsNumber) + 'Т';
    }

    // str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${splitter}`);
    str = str.replace('.', ',');
    return str;
}

}
