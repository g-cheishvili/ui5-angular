import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
interface ProductSwitchElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-product-switch',
})
export class ProductSwitchDirective {
  constructor(private elementRef: ElementRef<ProductSwitchElement>) {}

  get element(): ProductSwitchElement {
    return this.elementRef.nativeElement;
  }
}
