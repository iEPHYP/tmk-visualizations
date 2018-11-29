import { Directive, Input, ElementRef, Renderer2, OnDestroy, OnInit, HostBinding, ViewContainerRef, ComponentRef, ComponentFactoryResolver, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { LoaderComponent } from '../loader/loader.component';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[tmkLoader]'
})
export class LoaderDirective implements OnInit, OnDestroy {


    @HostBinding('style.position') position = 'relative';

    private _loaderName: string;
    @Input() public set tmkLoader(loaderName: string) {
        this._loaderName = loaderName;
        this.initLoader();
    }
    private loaderCreated = false;
    private loaderRef: ComponentRef<LoaderComponent>;

    public get loaderName() {
        return this._loaderName;
    }

    private loaderSubscription: Subscription;

    constructor(
        private loaderService: LoaderService,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private viewContainerRef: ViewContainerRef,
        private cfr: ComponentFactoryResolver
    ) { }

    ngOnDestroy(): void {
        this.loaderService.removeLoader(this.loaderName);
        if (this.loaderSubscription) {
            this.loaderSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
    }

    private initLoader() {
        if (this.loaderCreated) {
            this.loaderService.removeLoader(this.loaderName);
        }
        const loader = this.loaderService.createLoader(this.loaderName);
        loader.loadingState.subscribe(isLoading => {
            if (isLoading) {
                // console.log('createLoader', this.loaderName);
                this.createLoader();
            } else {
                // console.log('createLoader', this.loaderName);
                this.removeLoader();
            }
        });
        // this.createLoader();
        this.loaderCreated = true;
    }

    private createLoader() {
        if (!this.loaderRef) {
            const factory = this.cfr.resolveComponentFactory(LoaderComponent);
            this.viewContainerRef.clear();
            this.loaderRef = this.viewContainerRef.createComponent(factory);
            this.loaderRef.instance.loaderName = this.loaderName;
        }
    }

    private removeLoader() {
        if (this.loaderRef) {
            this.viewContainerRef.clear();
            this.loaderRef = null;
        }
    }
}
