import { Directive, Optional, Input, HostBinding, HostListener, QueryList, ContentChildren, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSyncScrollEl]'
})
export class SyncScrollElDirective {
  @Input() syncMaster: 'x' | 'y' ;
  @Input() syncSlave: 'x' | 'y';
  scroll: Function;
  constructor(public readonly el: ElementRef) { }

  @HostListener('mousewheel', ['$event'])
  @HostListener('DOMMouseScroll', ['$event'])
  @HostListener('onmousewheel', ['$event'])
  onMouseWheel() {
    return false;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    if (this.scroll && this.syncMaster != null) {
      const { target: { scrollTop, scrollLeft } } = event;
      this.scroll(this.syncMaster === 'x' ? scrollLeft : scrollTop);
    }
  }
}

@Directive({
  selector: '[appSyncScroll]'
})
export class SyncScrollDirective {
  private readonly groupedElements: { [key: string]: SyncScrollElDirective[] } = {};
  @Input() syncMouseWheel: boolean = true;
  @Input() mouseWheelSpeedFactor: number = 1.5;
  @ContentChildren(SyncScrollElDirective) children: QueryList<SyncScrollElDirective>;
  ngAfterViewInit() {
    this.children.toArray().forEach((el) => {
      const { syncMaster, syncSlave } = el;
      const identifiers = [syncMaster, syncSlave].filter((id, i, arr) => id != null && arr.indexOf(id) == i);
      identifiers.forEach((identifier) => {
        if (!this.groupedElements[identifier]) {
          this.groupedElements[identifier] = [];
        }
        this.groupedElements[identifier].push(el);
      });
    });
    Object.keys(this.groupedElements).forEach((groupKey) => {
      const group = this.groupedElements[groupKey];
      const master = group.find((el) => el.syncMaster == groupKey);
      const slaves = group.filter((el) => el.syncSlave == groupKey);
      master.scroll = (value) => {
        slaves.forEach((slave) => {
          if (groupKey === 'x') {
            slave.el.nativeElement.scrollLeft = value;
          } else {
            slave.el.nativeElement.scrollTop = value;
          }
        });
      }
    });
  }
  @HostListener('mousewheel', ['$event'])
  @HostListener('DOMMouseScroll', ['$event'])
  @HostListener('onmousewheel', ['$event'])
  onMouseWheel(event) {
    if (this.syncMouseWheel) {
      const { wheelDeltaY } = event;
      const groupY = this.groupedElements['y'];
      if (groupY) {
        const master = groupY.find((el) => el.syncMaster === 'y');
        if (master) {
          const { scrollHeight, scrollTop } = master.el.nativeElement;
          const scrollValue = scrollTop + (-1 * wheelDeltaY / this.mouseWheelSpeedFactor);
          if (scrollValue < scrollHeight) {
            master.el.nativeElement.scrollTop = scrollValue;
          }
        }
      }
    }
  }
}