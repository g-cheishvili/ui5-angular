import { Directive, ElementRef, Input } from '@angular/core';

import { BarDirective } from './bar.directive';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/Page.js';
interface PageElement {
  backgroundDesign: 'List' | 'Solid' | 'Transparent';
  disableScrolling: BooleanInputType;
  floatingFooter: BooleanInputType;
  hideFooter: BooleanInputType;

  // Slots
  footer: BarDirective['element'];
  header: BarDirective['element'];
}

@Directive({
  selector: 'ui5-page',
})
export class PageDirective {
  @Input()
  set backgroundDesign(val: PageElement['backgroundDesign']) {
    this.elementRef.nativeElement.backgroundDesign = val;
  }
  get backgroundDesign() {
    return this.elementRef.nativeElement.backgroundDesign;
  }
  @Input()
  set disableScrolling(val: PageElement['disableScrolling']) {
    this.elementRef.nativeElement.disableScrolling = booleanInput(val);
  }
  get disableScrolling() {
    return this.elementRef.nativeElement.hasAttribute('disable-scrolling');
  }
  @Input()
  set floatingFooter(val: PageElement['floatingFooter']) {
    this.elementRef.nativeElement.floatingFooter = booleanInput(val);
  }
  get floatingFooter() {
    return this.elementRef.nativeElement.hasAttribute('floating-footer');
  }
  @Input()
  set hideFooter(val: PageElement['hideFooter']) {
    this.elementRef.nativeElement.hideFooter = booleanInput(val);
  }
  get hideFooter() {
    return this.elementRef.nativeElement.hasAttribute('hide-footer');
  }

  constructor(private elementRef: ElementRef<PageElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get footer(): PageElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): PageElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
