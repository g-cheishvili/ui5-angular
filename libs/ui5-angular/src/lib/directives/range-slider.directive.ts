import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/RangeSlider.js';
interface RangeSliderElement extends HTMLElement {
  endValue: number;
  startValue: number;

  // Slots
}

@Directive({
  selector: 'ui5-range-slider',
})
export class RangeSliderDirective {
  @Input()
  set endValue(val: RangeSliderElement['endValue']) {
    this.elementRef.nativeElement.endValue = val;
  }
  get endValue() {
    return this.elementRef.nativeElement.getAttribute(
      'end-value'
    ) as unknown as RangeSliderElement['endValue'];
  }
  @Input()
  set startValue(val: RangeSliderElement['startValue']) {
    this.elementRef.nativeElement.startValue = val;
  }
  get startValue() {
    return this.elementRef.nativeElement.getAttribute(
      'start-value'
    ) as unknown as RangeSliderElement['startValue'];
  }

  constructor(private elementRef: ElementRef<RangeSliderElement>) {}

  get element(): RangeSliderElement {
    return this.elementRef.nativeElement;
  }
}
