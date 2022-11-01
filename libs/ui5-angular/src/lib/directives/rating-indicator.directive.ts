import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/RatingIndicator.js';
interface RatingIndicatorElement {
  accessibleName: string;
  disabled: BooleanInputType;
  max: any;
  readonly: BooleanInputType;
  value: any;

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-rating-indicator',
})
export class RatingIndicatorDirective {
  @Input()
  set accessibleName(val: RatingIndicatorElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set disabled(val: RatingIndicatorElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set max(val: RatingIndicatorElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.max;
  }
  @Input()
  set readonly(val: RatingIndicatorElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set value(val: RatingIndicatorElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<RatingIndicatorElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
