import { Component, OnInit, HostBinding } from '@angular/core';
import { Property } from '../../decorators/property';
import { LoaderService } from '../services/loader.service';
import { LoaderMetadata } from '../services/loader-metadata';

@Component({
    selector: 'tmk-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    @Property((self: LoaderComponent) => {
        self.loader = self.laoderService.loaders.find(l => l.name === self.loaderName);
        self.loader.loadingState.subscribe(isLoading => self.isHidden = !isLoading);
    })
    public loaderName: string;
    private loader: LoaderMetadata;

    @HostBinding('class.hidden') private isHidden = true;

    constructor(
        private laoderService: LoaderService
    ) { }

    ngOnInit() {
    }

}
