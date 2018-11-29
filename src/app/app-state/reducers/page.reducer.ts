import { PageState } from '../states/page.state';
import { INITIAL_APP_STATE } from '../states/app.state';
import { AnyAction } from 'redux';
import { PageActions, SetPageStateAction, UpdatePageStateAction } from '../actions/page.actions';

export function pageReducer(state: PageState = INITIAL_APP_STATE.pageState, action: AnyAction) {
    switch (action.type) {
        case PageActions.SET_PAGE_STATE:
            const setPageAction = action as SetPageStateAction;
            if (setPageAction.pageType == null) {
                return null;
            }
            return new PageState({
                pageType: setPageAction.pageType,
                pageState: setPageAction.pageState
            });
        case PageActions.UPDATE_PAGE_STATE:
            const updatePageAction = action as UpdatePageStateAction;
            const newState = new PageState(state);
            Object.assign(newState.pageState, updatePageAction.pageState);
            return newState;
    }
    return state;
}
