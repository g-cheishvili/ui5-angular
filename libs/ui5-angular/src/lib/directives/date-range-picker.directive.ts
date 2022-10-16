import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/DateRangePicker.js';
interface DateRangePickerElement extends HTMLElement {
  dateValue: any;
  dateValueUTC: any;
  delimiter: string;
  endDateValue: any;
  startDateValue: any;

  // Slots
}

@Directive({
  selector: 'ui5-daterange-picker',
})
export class DateRangePickerDirective {
  @Input()
  set dateValue(val: DateRangePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'date-value'
    ) as unknown as DateRangePickerElement['dateValue'];
  }
  @Input()
  set dateValueUTC(val: DateRangePickerElement['dateValueUTC']) {
    this.elementRef.nativeElement.dateValueUTC = val;
  }
  get dateValueUTC() {
    return this.elementRef.nativeElement.getAttribute(
      'date-value-utc'
    ) as unknown as DateRangePickerElement['dateValueUTC'];
  }
  @Input()
  set delimiter(val: DateRangePickerElement['delimiter']) {
    this.elementRef.nativeElement.delimiter = val;
  }
  get delimiter() {
    return this.elementRef.nativeElement.getAttribute(
      'delimiter'
    ) as unknown as DateRangePickerElement['delimiter'];
  }
  @Input()
  set endDateValue(val: DateRangePickerElement['endDateValue']) {
    this.elementRef.nativeElement.endDateValue = val;
  }
  get endDateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'end-date-value'
    ) as unknown as DateRangePickerElement['endDateValue'];
  }
  @Input()
  set startDateValue(val: DateRangePickerElement['startDateValue']) {
    this.elementRef.nativeElement.startDateValue = val;
  }
  get startDateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'start-date-value'
    ) as unknown as DateRangePickerElement['startDateValue'];
  }

  constructor(private elementRef: ElementRef<DateRangePickerElement>) {}

  get element(): DateRangePickerElement {
    return this.elementRef.nativeElement;
  }
}
