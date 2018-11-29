import { DataSource } from '@angular/cdk/collections';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface IFilterListVM<T = any> {
    nonactivatable?: boolean;
    active?: boolean;
    disabled?: boolean;
    data: T;
}
export function listToFilterList<T= any>(list: T[]) {
    return list.map(item => <IFilterListVM<T>>{ data: item });
}
export function createDataSource<T = any>(observable: Observable<IFilterListVM<T>[]>): DataSource<IFilterListVM> {
    return new class extends DataSource<IFilterListVM> {
        connect(collectionViewer: CollectionViewer): Observable<IFilterListVM<T>[]> { return observable; }
        disconnect(collectionViewer: CollectionViewer): void { }
    };
}

/**
 * Data source with additional methods
 * @T is type of data source list
 */
export class CustomDataSource<T> extends DataSource<IFilterListVM> {
    private readonly filterList = new BehaviorSubject<IFilterListVM<T>[]>([]);

    setItems(list: T[]) {
        const mappedList = list.map(data => ({ data }));
        this.filterList.next(mappedList);
    }

    setObservable(list$: Observable<T[]>) {
        list$.subscribe(list => this.setItems(list));
    }

    getItems(): T[] {
        return this.filterList.getValue().map(item => item.data);
    }

    getSelectedItem(): T {
        const selected: IFilterListVM<any> = this.filterList
            .getValue()
            .find(fl => fl.active);

        if (!!selected) {
            return <T>selected.data;
        }
    }

    connect(collectionViewer: CollectionViewer): Observable<IFilterListVM[]> {
        return this.filterList.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer) { }
}
