import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { PageType, PageState, BasePageState } from '../states/page.state';


export interface SetPageStateAction extends Action {
    pageState: Partial<BasePageState>;
    pageType: PageType;
}

export interface UpdatePageStateAction<T = BasePageState> extends Action {
    pageState: Partial<T>;
}

@Injectable()
export class PageActions {
    static readonly SET_PAGE_STATE = 'SET_PAGE_STATE';
    static readonly UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';

    public setPageState(pageType: PageType, pageState?: Partial<BasePageState>): SetPageStateAction {
        return {
            pageState, pageType, type: PageActions.SET_PAGE_STATE
        };
    }

    public updatePageState<T = BasePageState>(pageState: Partial<T>): UpdatePageStateAction<T> {
        return {
            pageState, type: PageActions.UPDATE_PAGE_STATE
        };
    }
}
