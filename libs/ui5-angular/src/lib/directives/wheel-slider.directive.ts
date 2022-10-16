import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/WheelSlider.js';
interface WheelSliderElement extends HTMLElement {
  cyclic: boolean;
  disabled: boolean;
  expanded: boolean;
  label: string;
  value: string;

  // Slots
}

@Directive({
  selector: 'ui5-wheelslider',
})
export class WheelSliderDirective {
  @Input()
  set cyclic(val: WheelSliderElement['cyclic']) {
    this.elementRef.nativeElement.cyclic = val;
  }
  get cyclic() {
    return this.elementRef.nativeElement.hasAttribute('cyclic');
  }
  @Input()
  set disabled(val: WheelSliderElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set expanded(val: WheelSliderElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded() {
    return this.elementRef.nativeElement.hasAttribute('expanded');
  }
  @Input()
  set label(val: WheelSliderElement['label']) {
    this.elementRef.nativeElement.label = val;
  }
  get label() {
    return this.elementRef.nativeElement.getAttribute(
      'label'
    ) as unknown as WheelSliderElement['label'];
  }
  @Input()
  set value(val: WheelSliderElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as WheelSliderElement['value'];
  }

  constructor(private elementRef: ElementRef<WheelSliderElement>) {}

  get element(): WheelSliderElement {
    return this.elementRef.nativeElement;
  }
}
