import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/ColorPicker.js';
interface ColorPickerElement extends HTMLElement {
  color: string;

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-color-picker',
})
export class ColorPickerDirective {
  @Input()
  set color(val: ColorPickerElement['color']) {
    this.elementRef.nativeElement.color = val;
  }
  get color() {
    return this.elementRef.nativeElement.getAttribute(
      'color'
    ) as unknown as ColorPickerElement['color'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ColorPickerElement>) {}

  get element(): ColorPickerElement {
    return this.elementRef.nativeElement;
  }
}
