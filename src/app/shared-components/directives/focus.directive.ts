import { Directive, Renderer2, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { FocusManagerService } from '../../services/focus-manager.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[tmkFocus]'
})
export class FocusDirective implements OnDestroy {


    private subscription: Subscription;


    private _tmkFocus: string;
    public get tmkFocus(): string {
        return this._tmkFocus;
    }
    @Input() public set tmkFocus(v: string) {
        this._tmkFocus = v;
        this.unsubscribe();
        this.subscription = this.focusManager.subscribe(this.tmkFocus).subscribe(this.focus.bind(this));
    }



    constructor(
        private elementRef: ElementRef,
        private focusManager: FocusManagerService
    ) { }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    private unsubscribe() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    private focus() {
        const element = this.elementRef.nativeElement as HTMLElement;
        element.focus();
    }

}
