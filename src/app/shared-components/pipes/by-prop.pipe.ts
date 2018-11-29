import { Pipe, PipeTransform } from '@angular/core';

/**Code example:
 * *
 *
 *          ngFor="let type of ingotTypes | async | byProp: 'brandId': 2"
 */
@Pipe({
  name: 'byProp'
})
export class ByPropPipe implements PipeTransform {

  transform(items: any[], propName: string, value: any): any {
    if (items) {
      return items.filter(itm => itm[propName] === value);
    }
  }

}
