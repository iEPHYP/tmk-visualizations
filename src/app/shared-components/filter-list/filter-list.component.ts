import { IFilterListVM } from './filter-list.models';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { takeUntil } from 'rxjs/operator/takeUntil';
import {
    OnInit,
    OnDestroy,
    AfterContentChecked,
    AfterViewInit,
    ContentChild,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ElementRef,
    Input,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Output
} from '@angular/core';
import * as _ from 'lodash';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'filter-list',
    templateUrl: './filter-list.component.html',
    styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit, CollectionViewer, OnDestroy, AfterContentChecked {
    static id = 0;
    private _onDestroy = new Subject<void>();

    public viewChange: Observable<{ start: number; end: number; }> = new BehaviorSubject<{
        start: number, end: number
    }>({ start: 0, end: Number.MAX_VALUE });

    private colView: CollectionViewer;
    public data: IFilterListVM[] = [];

    @ContentChild('titleTemplate') private titleTemplate: TemplateRef<any>;
    @ContentChild('buttonsTemplate') private buttonsTemplate: TemplateRef<any>;
    @ContentChild('headerTemplate') public headerTemplate: TemplateRef<any>;

    @ViewChild('rows', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;
    @ViewChild('rowTemplate') private rowTemplate: TemplateRef<any>;
    @ViewChild('rowsWrapper') private rowsWrapper: ElementRef;

    @Input()
    get dataSource(): DataSource<IFilterListVM> { return this._dataSource; }
    set dataSource(dataSource: DataSource<IFilterListVM>) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    private _dataSource: DataSource<IFilterListVM>;

    @Input() loaderName = `filter-list-${++FilterListComponent.id}`;

    public scrollOptions: MCustomScrollbar.CustomScrollbarOptions = {
        theme: 'minimal-dark',
        scrollInertia: 0
    };

    @Input() public rowClassName: string;
    @Input() public title: string;
    @Input() public selectDefaultItem = this.selectFirstItem.bind(this);

    private _renderChangeSubscription: Subscription | null;
    public selectedItem: IFilterListVM;

    // tslint:disable-next-line:no-output-on-prefix
    @Output() public onItemSelected = new EventEmitter<IFilterListVM>();
    @Output() public onItemClicked = new EventEmitter<IFilterListVM>();

    constructor(
        private mScrollbar: MalihuScrollbarService,
        private changeDetection: ChangeDetectorRef
    ) { }

    private _observeRenderChanges() {
        this._renderChangeSubscription = takeUntil.call(this.dataSource.connect(this), this._onDestroy)
            .subscribe(data => {
                this.data = data;
                this._renderRowChanges();
            });
    }

    ngOnInit() { }

    ngAfterContentChecked() {
        if (this.dataSource && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
    }

    ngOnDestroy() {

        if (this.rowsWrapper) {
            this.mScrollbar.destroy(this.rowsWrapper.nativeElement);
        }

        this._onDestroy.next();
        this._onDestroy.complete();

        if (this.dataSource) {
            this.dataSource.disconnect(this);
        }
    }

    private _switchDataSource(dataSource: DataSource<IFilterListVM>) {
        this.data = [];

        if (this.dataSource) {
            this.dataSource.disconnect(this);
        }

        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }

        this._dataSource = dataSource;
    }

    public clickItem(item: IFilterListVM) {
        this.selectItem(item);
        this.onItemClicked.emit(item);
    }

    public selectItem(item: IFilterListVM) {
        if (item) {
            if (this.selectedItem) {
                this.selectedItem.active = false;
            }
            item.active = true;
            this.selectedItem = item;
            this.onItemSelected.emit(item);
        }
    }

    private selectFirstItem() {
        const firstItem = _(this.data).first();
        return firstItem;
    }


    private _renderRowChanges() {
        if (this.data && this.data.length) {
            this.selectItem(this.selectDefaultItem(this.data));
        }
        // if (this.viewContainerRef && this.rowTemplate) {
        //     this.viewContainerRef.clear();
        //     for (const item of this.data) {
        //         this.viewContainerRef.createEmbeddedView(this.rowTemplate, {
        //             buttons: this.buttonsTemplate,
        //             title: this.titleTemplate,
        //             item: item
        //         });
        //     }

        // }
    }

}
