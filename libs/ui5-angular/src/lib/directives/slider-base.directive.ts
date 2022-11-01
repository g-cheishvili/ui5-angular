import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/SliderBase.js';
interface SliderBaseElement {
  accessibleName: string;
  disabled: BooleanInputType;
  labelInterval: any;
  max: any;
  min: any;
  showTickmarks: BooleanInputType;
  showTooltip: BooleanInputType;
  step: any;

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
    this.elementRef.nativeElement.disabled = booleanInput(val);
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
    this.elementRef.nativeElement.showTickmarks = booleanInput(val);
  }
  get showTickmarks() {
    return this.elementRef.nativeElement.hasAttribute('show-tickmarks');
  }
  @Input()
  set showTooltip(val: SliderBaseElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = booleanInput(val);
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
  constructor(
    private elementRef: ElementRef<SliderBaseElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
