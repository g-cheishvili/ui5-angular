import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Slider.js';
interface SliderElement extends HTMLElement {
  value: number;

  // Slots
}

@Directive({
  selector: 'ui5-slider',
})
export class SliderDirective {
  @Input()
  set value(val: SliderElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as SliderElement['value'];
  }

  constructor(private elementRef: ElementRef<SliderElement>) {}

  get element(): SliderElement {
    return this.elementRef.nativeElement;
  }
}
