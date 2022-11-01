import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Calendar.js';
interface CalendarElement {
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
  hideWeekNumbers: BooleanInputType;
  selectionMode: 'Multiple' | 'Range' | 'Single';

  // Slots
}

interface OutputTypes {
  selectedDatesChange: { values: Array<any>; dates: Array<any> };
}

@Directive({
  selector: 'ui5-calendar',
})
export class CalendarDirective {
  @Input()
  set formatPattern(val: CalendarElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as CalendarElement['formatPattern'];
  }
  @Input()
  set maxDate(val: CalendarElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.getAttribute(
      'max-date'
    ) as unknown as CalendarElement['maxDate'];
  }
  @Input()
  set minDate(val: CalendarElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.getAttribute(
      'min-date'
    ) as unknown as CalendarElement['minDate'];
  }
  @Input()
  set primaryCalendarType(val: CalendarElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-calendar-type'
    ) as unknown as CalendarElement['primaryCalendarType'];
  }
  @Input()
  set secondaryCalendarType(val: CalendarElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-calendar-type'
    ) as unknown as CalendarElement['secondaryCalendarType'];
  }
  @Input()
  set hideWeekNumbers(val: CalendarElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = booleanInput(val);
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set selectionMode(val: CalendarElement['selectionMode']) {
    this.elementRef.nativeElement.selectionMode = val;
  }
  get selectionMode() {
    return this.elementRef.nativeElement.getAttribute(
      'selection-mode'
    ) as unknown as CalendarElement['selectionMode'];
  }

  @Output('selected-dates-change') selectedDatesChange: Observable<
    CustomEvent<OutputTypes['selectedDatesChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<CalendarElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
