import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/StepInput.js';
interface StepInputElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  max: any;
  min: any;
  name: string;
  placeholder: string;
  readonly: BooleanInputType;
  required: BooleanInputType;
  step: any;
  value: any;
  valuePrecision: any;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  valueStateMessage: HTMLElement;
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-step-input',
})
export class StepInputDirective {
  @Input()
  set accessibleName(val: StepInputElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: StepInputElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set disabled(val: StepInputElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set max(val: StepInputElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max() {
    return this.elementRef.nativeElement.max;
  }
  @Input()
  set min(val: StepInputElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min() {
    return this.elementRef.nativeElement.min;
  }
  @Input()
  set name(val: StepInputElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set placeholder(val: StepInputElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.placeholder;
  }
  @Input()
  set readonly(val: StepInputElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: StepInputElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set step(val: StepInputElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step() {
    return this.elementRef.nativeElement.step;
  }
  @Input()
  set value(val: StepInputElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valuePrecision(val: StepInputElement['valuePrecision']) {
    this.elementRef.nativeElement.valuePrecision = val;
  }
  get valuePrecision() {
    return this.elementRef.nativeElement.valuePrecision;
  }
  @Input()
  set valueState(val: StepInputElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<StepInputElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): StepInputElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
