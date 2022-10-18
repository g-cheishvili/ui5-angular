import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/DatePicker.js';
interface DatePickerElement {
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
  valueState: 'None' | 'Success' | 'Warning' | 'Error' | 'Information';
  formatPattern: string;
  maxDate: string;
  minDate: string;
  primaryCalendarType: any;
  secondaryCalendarType: any;

  // Slots
  valueStateMessage: HTMLElement;
}

interface OutputTypes {
  change: { value: string; valid: boolean };

  input: { value: string; valid: boolean };
}

@Directive({
  selector: 'ui5-date-picker',
})
export class DatePickerDirective {
  @Input()
  set accessibleName(val: DatePickerElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as DatePickerElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: DatePickerElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as DatePickerElement['accessibleNameRef'];
  }
  @Input()
  set dateValue(val: DatePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'date-value'
    ) as unknown as DatePickerElement['dateValue'];
  }
  @Input()
  set disabled(val: DatePickerElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set hideWeekNumbers(val: DatePickerElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = booleanInput(val);
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set name(val: DatePickerElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as DatePickerElement['name'];
  }
  @Input()
  set placeholder(val: DatePickerElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as DatePickerElement['placeholder'];
  }
  @Input()
  set readonly(val: DatePickerElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: DatePickerElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set value(val: DatePickerElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as DatePickerElement['value'];
  }
  @Input()
  set valueState(val: DatePickerElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as DatePickerElement['valueState'];
  }
  @Input()
  set formatPattern(val: DatePickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as DatePickerElement['formatPattern'];
  }
  @Input()
  set maxDate(val: DatePickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.getAttribute(
      'max-date'
    ) as unknown as DatePickerElement['maxDate'];
  }
  @Input()
  set minDate(val: DatePickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.getAttribute(
      'min-date'
    ) as unknown as DatePickerElement['minDate'];
  }
  @Input()
  set primaryCalendarType(val: DatePickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-calendar-type'
    ) as unknown as DatePickerElement['primaryCalendarType'];
  }
  @Input()
  set secondaryCalendarType(val: DatePickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-calendar-type'
    ) as unknown as DatePickerElement['secondaryCalendarType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<DatePickerElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): DatePickerElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
