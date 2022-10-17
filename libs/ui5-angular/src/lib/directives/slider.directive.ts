import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Slider.js';
interface SliderElement extends HTMLElement {
  value: number;
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
  @Input()
  set accessibleName(val: SliderElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SliderElement['accessibleName'];
  }
  @Input()
  set disabled(val: SliderElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set labelInterval(val: SliderElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval() {
    return this.elementRef.nativeElement.getAttribute(
      'label-interval'
    ) as unknown as SliderElement['labelInterval'];
  }
  @Input()
  set max(val: SliderElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.getAttribute(
      'max'
    ) as unknown as SliderElement['max'];
  }
  @Input()
  set min(val: SliderElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min() {
    return this.elementRef.nativeElement.getAttribute(
      'min'
    ) as unknown as SliderElement['min'];
  }
  @Input()
  set showTickmarks(val: SliderElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks() {
    return this.elementRef.nativeElement.hasAttribute('show-tickmarks');
  }
  @Input()
  set showTooltip(val: SliderElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip() {
    return this.elementRef.nativeElement.hasAttribute('show-tooltip');
  }
  @Input()
  set step(val: SliderElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step() {
    return this.elementRef.nativeElement.getAttribute(
      'step'
    ) as unknown as SliderElement['step'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SliderElement>) {}

  get element(): SliderElement {
    return this.elementRef.nativeElement;
  }
}
