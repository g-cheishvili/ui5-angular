import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TabSeparator.js';
interface TabSeparatorElement {
  // Slots
}

@Directive({
  selector: 'ui5-tab-separator',
})
export class TabSeparatorDirective {
  constructor(
    private elementRef: ElementRef<TabSeparatorElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
