import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TabSeparator.js';
interface TabSeparatorElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-tab-separator',
})
export class TabSeparatorDirective {
  constructor(private elementRef: ElementRef<TabSeparatorElement>) {}

  get element(): TabSeparatorElement {
    return this.elementRef.nativeElement;
  }
}
