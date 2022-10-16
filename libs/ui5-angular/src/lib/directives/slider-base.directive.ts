import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/SliderBase.js';
interface SliderBaseElement extends HTMLElement {
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
export class SliderBaseDirective {
  @Input()
  set accessibleName(val: SliderBaseElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SliderBaseElement['accessibleName'];
  }
  @Input()
  set disabled(val: SliderBaseElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set labelInterval(val: SliderBaseElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval() {
    return this.elementRef.nativeElement.getAttribute(
      'label-interval'
    ) as unknown as SliderBaseElement['labelInterval'];
  }
  @Input()
  set max(val: SliderBaseElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.getAttribute(
      'max'
    ) as unknown as SliderBaseElement['max'];
  }
  @Input()
  set min(val: SliderBaseElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min() {
    return this.elementRef.nativeElement.getAttribute(
      'min'
    ) as unknown as SliderBaseElement['min'];
  }
  @Input()
  set showTickmarks(val: SliderBaseElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks() {
    return this.elementRef.nativeElement.hasAttribute('show-tickmarks');
  }
  @Input()
  set showTooltip(val: SliderBaseElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip() {
    return this.elementRef.nativeElement.hasAttribute('show-tooltip');
  }
  @Input()
  set step(val: SliderBaseElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step() {
    return this.elementRef.nativeElement.getAttribute(
      'step'
    ) as unknown as SliderBaseElement['step'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SliderBaseElement>) {}

  get element(): SliderBaseElement {
    return this.elementRef.nativeElement;
  }
}
