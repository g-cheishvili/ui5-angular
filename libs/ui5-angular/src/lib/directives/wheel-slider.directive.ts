import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/WheelSlider.js';
interface WheelSliderElement {
  cyclic: BooleanInputType;
  disabled: BooleanInputType;
  expanded: BooleanInputType;
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
    this.elementRef.nativeElement.cyclic = booleanInput(val);
  }
  get cyclic() {
    return this.elementRef.nativeElement.hasAttribute('cyclic');
  }
  @Input()
  set disabled(val: WheelSliderElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set expanded(val: WheelSliderElement['expanded']) {
    this.elementRef.nativeElement.expanded = booleanInput(val);
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

  constructor(
    private elementRef: ElementRef<WheelSliderElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
