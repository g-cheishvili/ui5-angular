import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/ResponsivePopover.js';
interface ResponsivePopoverElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-responsive-popover',
})
export class ResponsivePopoverDirective {
  constructor(private elementRef: ElementRef<ResponsivePopoverElement>) {}

  get element(): ResponsivePopoverElement {
    return this.elementRef.nativeElement;
  }
}
