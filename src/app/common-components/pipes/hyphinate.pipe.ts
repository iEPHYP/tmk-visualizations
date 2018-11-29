import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hyphinate'
})
export class HyphinatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        const el = $(document.createElement('div'));
        el.html(value);
        el.hyphenate('en-us').hyphenates();
        return el.html();
    }

}
