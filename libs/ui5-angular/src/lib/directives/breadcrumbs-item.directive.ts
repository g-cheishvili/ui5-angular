import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
interface BreadcrumbsItemElement {
  accessibleName: string;
  href: string;
  target: string;

  // Slots
}

@Directive({
  selector: 'ui5-breadcrumbs-item',
})
export class BreadcrumbsItemDirective {
  @Input()
  set accessibleName(val: BreadcrumbsItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set href(val: BreadcrumbsItemElement['href']) {
    this.elementRef.nativeElement.href = val;
  }
  get href() {
    return this.elementRef.nativeElement.href;
  }
  @Input()
  set target(val: BreadcrumbsItemElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target() {
    return this.elementRef.nativeElement.target;
  }

  constructor(
    private elementRef: ElementRef<BreadcrumbsItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
