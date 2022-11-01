import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/DateTimePicker.js';
interface DateTimePickerElement {
  formatPattern: string;
  maxDate: string;
  minDate: string;
  primaryCalendarType:
    | 'Buddhist'
    | 'Gregorian'
    | 'Islamic'
    | 'Japanese'
    | 'Persian';
  secondaryCalendarType:
    | 'Buddhist'
    | 'Gregorian'
    | 'Islamic'
    | 'Japanese'
    | 'Persian';
  accessibleName: string;
  accessibleNameRef: string;
  dateValue: any;
  disabled: BooleanInputType;
  hideWeekNumbers: BooleanInputType;
  name: string;
  placeholder: string;
  readonly: BooleanInputType;
  required: BooleanInputType;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  valueStateMessage: HTMLElement;
}

interface OutputTypes {
  change: { value: string; valid: boolean };

  input: { value: string; valid: boolean };
}

@Directive({
  selector: 'ui5-datetime-picker',
})
export class DateTimePickerDirective {
  @Input()
  set formatPattern(val: DateTimePickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.formatPattern;
  }
  @Input()
  set maxDate(val: DateTimePickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.maxDate;
  }
  @Input()
  set minDate(val: DateTimePickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.minDate;
  }
  @Input()
  set primaryCalendarType(val: DateTimePickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.primaryCalendarType;
  }
  @Input()
  set secondaryCalendarType(
    val: DateTimePickerElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }
  @Input()
  set accessibleName(val: DateTimePickerElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: DateTimePickerElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set dateValue(val: DateTimePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.dateValue;
  }
  @Input()
  set disabled(val: DateTimePickerElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set hideWeekNumbers(val: DateTimePickerElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = booleanInput(val);
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set name(val: DateTimePickerElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set placeholder(val: DateTimePickerElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.placeholder;
  }
  @Input()
  set readonly(val: DateTimePickerElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: DateTimePickerElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set value(val: DateTimePickerElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valueState(val: DateTimePickerElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<DateTimePickerElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): DateTimePickerElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
