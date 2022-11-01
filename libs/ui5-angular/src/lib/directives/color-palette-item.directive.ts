import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
interface ColorPaletteItemElement {
  value: any;

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

  constructor(
    private elementRef: ElementRef<ColorPaletteItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
