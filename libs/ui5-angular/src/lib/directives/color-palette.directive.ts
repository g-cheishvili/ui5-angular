import { Directive, ElementRef, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/ColorPalette.js';
interface ColorPaletteElement {
  // Slots
}

interface OutputTypes {
  itemClick: { color: string };
}

@Directive({
  selector: 'ui5-color-palette',
})
export class ColorPaletteDirective {
  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<ColorPaletteElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
