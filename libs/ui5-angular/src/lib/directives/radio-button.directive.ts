import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/RadioButton.js';
interface RadioButtonElement {
  accessibleName: string;
  accessibleNameRef: string;
  checked: BooleanInputType;
  disabled: BooleanInputType;
  name: string;
  readonly: BooleanInputType;
  required: BooleanInputType;
  text: string;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  wrappingType: 'None' | 'Normal';

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-radio-button',
})
export class RadioButtonDirective {
  @Input()
  set accessibleName(val: RadioButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as RadioButtonElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: RadioButtonElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as RadioButtonElement['accessibleNameRef'];
  }
  @Input()
  set checked(val: RadioButtonElement['checked']) {
    this.elementRef.nativeElement.checked = booleanInput(val);
  }
  get checked() {
    return this.elementRef.nativeElement.hasAttribute('checked');
  }
  @Input()
  set disabled(val: RadioButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set name(val: RadioButtonElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as RadioButtonElement['name'];
  }
  @Input()
  set readonly(val: RadioButtonElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: RadioButtonElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set text(val: RadioButtonElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as RadioButtonElement['text'];
  }
  @Input()
  set value(val: RadioButtonElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as RadioButtonElement['value'];
  }
  @Input()
  set valueState(val: RadioButtonElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as RadioButtonElement['valueState'];
  }
  @Input()
  set wrappingType(val: RadioButtonElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as RadioButtonElement['wrappingType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<RadioButtonElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
