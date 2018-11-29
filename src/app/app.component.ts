import * as _ from 'lodash';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FontWatcherService } from './services/font-watcher.service';
import { LoaderMetadata } from './shared-components/services/loader-metadata';
import { LoaderService } from './shared-components/services/loader.service';
import { SettingsService } from './services/settings.service';

@Component({
    selector: 'tmk-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loaderName = LoaderService.PAGE_TRANSITION_LOADER;
    private pageLoader: LoaderMetadata;

    constructor(
        private settings: SettingsService,
        private router: Router,
        private loaderService: LoaderService,
        private fontWatcher: FontWatcherService,
    ) {
        this.fontWatcher.startWatcher();
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.pageLoader) {
                    this.pageLoader.loaded();
                }
                this.pageLoader = this.loaderService.setLoading(LoaderService.PAGE_TRANSITION_LOADER);
            }
            if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.settings.isTableMenuActive = false;
                this.settings.isChartMenuActive = false;
                if (this.pageLoader) {
                    this.pageLoader.loaded();
                }
            }
        });
    }

}
