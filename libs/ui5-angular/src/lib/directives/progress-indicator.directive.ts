import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/ProgressIndicator.js';
interface ProgressIndicatorElement {
  disabled: BooleanInputType;
  displayValue: string;
  hideValue: BooleanInputType;
  value: any;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
}

@Directive({
  selector: 'ui5-progress-indicator',
})
export class ProgressIndicatorDirective {
  @Input()
  set disabled(val: ProgressIndicatorElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set displayValue(val: ProgressIndicatorElement['displayValue']) {
    this.elementRef.nativeElement.displayValue = val;
  }
  get displayValue() {
    return this.elementRef.nativeElement.displayValue;
  }
  @Input()
  set hideValue(val: ProgressIndicatorElement['hideValue']) {
    this.elementRef.nativeElement.hideValue = booleanInput(val);
  }
  get hideValue() {
    return this.elementRef.nativeElement.hasAttribute('hide-value');
  }
  @Input()
  set value(val: ProgressIndicatorElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valueState(val: ProgressIndicatorElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  constructor(
    private elementRef: ElementRef<ProgressIndicatorElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
