import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/DateRangePicker.js';
interface DateRangePickerElement {
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
  dateValueUTC: any;
  delimiter: string;
  endDateValue: any;
  startDateValue: any;

  // Slots
  valueStateMessage: HTMLElement;
}

interface OutputTypes {
  change: { value: string; valid: boolean };

  input: { value: string; valid: boolean };
}

@Directive({
  selector: 'ui5-daterange-picker',
})
export class DateRangePickerDirective {
  @Input()
  set formatPattern(val: DateRangePickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.formatPattern;
  }
  @Input()
  set maxDate(val: DateRangePickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.maxDate;
  }
  @Input()
  set minDate(val: DateRangePickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.minDate;
  }
  @Input()
  set primaryCalendarType(val: DateRangePickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.primaryCalendarType;
  }
  @Input()
  set secondaryCalendarType(
    val: DateRangePickerElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }
  @Input()
  set accessibleName(val: DateRangePickerElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: DateRangePickerElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set dateValue(val: DateRangePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.dateValue;
  }
  @Input()
  set disabled(val: DateRangePickerElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set hideWeekNumbers(val: DateRangePickerElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = booleanInput(val);
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set name(val: DateRangePickerElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set placeholder(val: DateRangePickerElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.placeholder;
  }
  @Input()
  set readonly(val: DateRangePickerElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: DateRangePickerElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set value(val: DateRangePickerElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valueState(val: DateRangePickerElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }
  @Input()
  set dateValueUTC(val: DateRangePickerElement['dateValueUTC']) {
    this.elementRef.nativeElement.dateValueUTC = val;
  }
  get dateValueUTC() {
    return this.elementRef.nativeElement.dateValueUTC;
  }
  @Input()
  set delimiter(val: DateRangePickerElement['delimiter']) {
    this.elementRef.nativeElement.delimiter = val;
  }
  get delimiter() {
    return this.elementRef.nativeElement.delimiter;
  }
  @Input()
  set endDateValue(val: DateRangePickerElement['endDateValue']) {
    this.elementRef.nativeElement.endDateValue = val;
  }
  get endDateValue() {
    return this.elementRef.nativeElement.endDateValue;
  }
  @Input()
  set startDateValue(val: DateRangePickerElement['startDateValue']) {
    this.elementRef.nativeElement.startDateValue = val;
  }
  get startDateValue() {
    return this.elementRef.nativeElement.startDateValue;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<DateRangePickerElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): DateRangePickerElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
