import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
interface ColorPaletteItemElement extends HTMLElement {
  value: string;

  // Slots
}

@Directive({
  selector: 'ui5-color-palette-item',
})
export class ColorPaletteItemDirective {
  @Input()
  set value(val: ColorPaletteItemElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as ColorPaletteItemElement['value'];
  }

  constructor(private elementRef: ElementRef<ColorPaletteItemElement>) {}

  get element(): ColorPaletteItemElement {
    return this.elementRef.nativeElement;
  }
}
