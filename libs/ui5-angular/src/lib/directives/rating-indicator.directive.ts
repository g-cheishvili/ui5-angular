import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/RatingIndicator.js';
interface RatingIndicatorElement extends HTMLElement {
  accessibleName: string;
  disabled: boolean;
  max: number;
  readonly: boolean;
  value: number;

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
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as RatingIndicatorElement['accessibleName'];
  }
  @Input()
  set disabled(val: RatingIndicatorElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set max(val: RatingIndicatorElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.getAttribute(
      'max'
    ) as unknown as RatingIndicatorElement['max'];
  }
  @Input()
  set readonly(val: RatingIndicatorElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set value(val: RatingIndicatorElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as RatingIndicatorElement['value'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<RatingIndicatorElement>) {}

  get element(): RatingIndicatorElement {
    return this.elementRef.nativeElement;
  }
}
