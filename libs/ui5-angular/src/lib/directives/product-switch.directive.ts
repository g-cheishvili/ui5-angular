import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
interface ProductSwitchElement {
  // Slots
}

@Directive({
  selector: 'ui5-product-switch',
})
export class ProductSwitchDirective {
  constructor(
    private elementRef: ElementRef<ProductSwitchElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
