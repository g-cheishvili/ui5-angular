import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ProgressIndicator.js';
interface ProgressIndicatorElement extends HTMLElement {
  disabled: boolean;
  displayValue: string;
  hideValue: boolean;
  value: number;
  valueState: any;

  // Slots
}

@Directive({
  selector: 'ui5-progress-indicator',
})
export class ProgressIndicatorDirective {
  @Input()
  set disabled(val: ProgressIndicatorElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set displayValue(val: ProgressIndicatorElement['displayValue']) {
    this.elementRef.nativeElement.displayValue = val;
  }
  get displayValue() {
    return this.elementRef.nativeElement.getAttribute(
      'display-value'
    ) as unknown as ProgressIndicatorElement['displayValue'];
  }
  @Input()
  set hideValue(val: ProgressIndicatorElement['hideValue']) {
    this.elementRef.nativeElement.hideValue = val;
  }
  get hideValue() {
    return this.elementRef.nativeElement.hasAttribute('hide-value');
  }
  @Input()
  set value(val: ProgressIndicatorElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as ProgressIndicatorElement['value'];
  }
  @Input()
  set valueState(val: ProgressIndicatorElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as ProgressIndicatorElement['valueState'];
  }

  constructor(private elementRef: ElementRef<ProgressIndicatorElement>) {}

  get element(): ProgressIndicatorElement {
    return this.elementRef.nativeElement;
  }
}
