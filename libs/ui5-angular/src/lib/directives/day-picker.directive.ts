import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/DayPicker.js';
interface DayPickerElement extends HTMLElement {
  hideWeekNumbers: boolean;
  selectedDates: Array<any>;
  selectionMode: 'Multiple' | 'Range' | 'Single';
  formatPattern: string;
  maxDate: string;
  minDate: string;
  primaryCalendarType: any;
  secondaryCalendarType: any;

  // Slots
}

interface OutputTypes {
  change: void;

  navigate: void;
}

@Directive({
  selector: 'ui5-daypicker',
})
export class DayPickerDirective {
  @Input()
  set hideWeekNumbers(val: DayPickerElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set selectedDates(val: DayPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-dates'
    ) as unknown as DayPickerElement['selectedDates'];
  }
  @Input()
  set selectionMode(val: DayPickerElement['selectionMode']) {
    this.elementRef.nativeElement.selectionMode = val;
  }
  get selectionMode() {
    return this.elementRef.nativeElement.getAttribute(
      'selection-mode'
    ) as unknown as DayPickerElement['selectionMode'];
  }
  @Input()
  set formatPattern(val: DayPickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as DayPickerElement['formatPattern'];
  }
  @Input()
  set maxDate(val: DayPickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.getAttribute(
      'max-date'
    ) as unknown as DayPickerElement['maxDate'];
  }
  @Input()
  set minDate(val: DayPickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.getAttribute(
      'min-date'
    ) as unknown as DayPickerElement['minDate'];
  }
  @Input()
  set primaryCalendarType(val: DayPickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-calendar-type'
    ) as unknown as DayPickerElement['primaryCalendarType'];
  }
  @Input()
  set secondaryCalendarType(val: DayPickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-calendar-type'
    ) as unknown as DayPickerElement['secondaryCalendarType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<DayPickerElement>) {}

  get element(): DayPickerElement {
    return this.elementRef.nativeElement;
  }
}
