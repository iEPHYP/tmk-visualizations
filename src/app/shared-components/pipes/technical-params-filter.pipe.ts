import { Pipe, PipeTransform } from '@angular/core';

interface Item {
    id: number;
    title: string;
}

@Pipe({
  name: 'technicalparamsfilter',
  pure: false  
})



export class TechnicalParamsFilterPipe implements PipeTransform {
    transform(items: Item[], filter: string): any {
        if (!items || !filter) {
            return items;
        }

        filter = filter.toLowerCase();

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => {



            item.title = item.title.toLowerCase();

            //item.title = item.toLowerCase();
            console.log( 'ITEEEEEEM=>', item );

            return item.title.indexOf(filter) !== -1;
        });
    }
}
