import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomReuseStrategy implements RouteReuseStrategy {

    handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return !!route.data && !!route.data.shouldReuseTag;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if (!!route.data && !!route.data.shouldReuseTag) {
            this.handlers[route.data.shouldReuseTag] = handle;
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !(!route.data || !route.data.shouldReuseTag || !this.handlers[route.data.shouldReuseTag]);
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.data || !route.data.shouldReuseTag) {
            return null;
        }
        return this.handlers[route.data.shouldReuseTag];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.log('should reuse route', future.data.shouldReuseTag, curr.data.shouldReuseTag);
        // if (future.data && curr.data) {
        //     const result = future.data.shouldReuseTag === curr.data.shouldReuseTag && !!future.data.shouldReuseTag && !!curr.data.shouldReuseTag;
        //     console.log(result);
        //     return result;
        // } else {
        //     return false;
        // }
        return true;
    }

}
