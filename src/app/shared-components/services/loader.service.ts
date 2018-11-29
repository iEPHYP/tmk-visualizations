import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import { LoaderMetadata } from './loader-metadata';



@Injectable()
export class LoaderService {

    loaders: LoaderMetadata[] = [];

    constructor() { }

    public createLoader(name: string) {
        let loader = this.loaders.find(l => l.name === name);
        if (!loader) {
            loader = new LoaderMetadata(name);
            this.loaders.push(loader);
        }
        return loader;
    }

    public setLoading(name: string) {
        let loader = this.loaders.find(l => l.name === name);
        if (loader) {
            loader.setLoading();
        } else {
            loader = this.createLoader(name);
            loader.setLoading();
        }
        return loader;
    }

    public removeLoader(name: string) {
        const loader = this.loaders.find(l => l.name === name);
        if (!loader) { return; }
        if (loader.loadingCount === 0) {
            _(this.loaders).remove(loader).commit();
        }
    }

}

export namespace LoaderService {
    export const PIVOT_TABLE_LOADER = 'pivot-table-loader';
    export const PPR_PAGE_LOADER = 'ppr-page-loader';
    export const PAGE_TRANSITION_LOADER = 'page-transition-loader';
    export const BALANCES_LOADER = 'balances-loader';

    export const PRODUCT_TABLE_PRODUCT_FILTER_LOADER = 'PRODUCT_TABLE_PRODUCT_FILTER_LOADER';
    export const PRODUCT_TABLE_BALANCE_OPERATION_FILTER_LOADER = 'PRODUCT_TABLE_BALANCE_OPERATION_FILTER_LOADER';
    export const CHARTS_LOADER = 'CHARTS_LOADER';
}
