import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/RangeSlider.js';
interface RangeSliderElement extends HTMLElement {
  endValue: number;
  startValue: number;
  accessibleName: string;
  disabled: boolean;
  labelInterval: number;
  max: number;
  min: number;
  showTickmarks: boolean;
  showTooltip: boolean;
  step: number;

  // Slots
}

interface OutputTypes {
  change: void;

  input: void;
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
  @Input()
  set accessibleName(val: RangeSliderElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as RangeSliderElement['accessibleName'];
  }
  @Input()
  set disabled(val: RangeSliderElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set labelInterval(val: RangeSliderElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval() {
    return this.elementRef.nativeElement.getAttribute(
      'label-interval'
    ) as unknown as RangeSliderElement['labelInterval'];
  }
  @Input()
  set max(val: RangeSliderElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.getAttribute(
      'max'
    ) as unknown as RangeSliderElement['max'];
  }
  @Input()
  set min(val: RangeSliderElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min() {
    return this.elementRef.nativeElement.getAttribute(
      'min'
    ) as unknown as RangeSliderElement['min'];
  }
  @Input()
  set showTickmarks(val: RangeSliderElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks() {
    return this.elementRef.nativeElement.hasAttribute('show-tickmarks');
  }
  @Input()
  set showTooltip(val: RangeSliderElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip() {
    return this.elementRef.nativeElement.hasAttribute('show-tooltip');
  }
  @Input()
  set step(val: RangeSliderElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step() {
    return this.elementRef.nativeElement.getAttribute(
      'step'
    ) as unknown as RangeSliderElement['step'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<RangeSliderElement>) {}

  get element(): RangeSliderElement {
    return this.elementRef.nativeElement;
  }
}
