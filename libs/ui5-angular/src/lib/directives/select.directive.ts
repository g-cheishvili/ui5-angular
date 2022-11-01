import { Directive, ElementRef, Input, Output } from '@angular/core';

import { OptionDirective } from './option.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Select.js';
interface SelectElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  name: string;
  required: BooleanInputType;
  selectedOption: OptionDirective['element'];
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: { selectedOption: HTMLElement };
}

@Directive({
  selector: 'ui5-select',
})
export class SelectDirective {
  @Input()
  set accessibleName(val: SelectElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: SelectElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set disabled(val: SelectElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set name(val: SelectElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set required(val: SelectElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set selectedOption(val: SelectElement['selectedOption']) {
    this.elementRef.nativeElement.selectedOption = val;
  }
  get selectedOption() {
    return this.elementRef.nativeElement.selectedOption;
  }
  @Input()
  set valueState(val: SelectElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SelectElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): SelectElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
