import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/DayPicker.js';
interface DayPickerElement {
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
  selectedDates: Array<any>;
  selectionMode: 'Multiple' | 'Range' | 'Single';

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
  set formatPattern(val: DayPickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.formatPattern;
  }
  @Input()
  set maxDate(val: DayPickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.maxDate;
  }
  @Input()
  set minDate(val: DayPickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.minDate;
  }
  @Input()
  set primaryCalendarType(val: DayPickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.primaryCalendarType;
  }
  @Input()
  set secondaryCalendarType(val: DayPickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }
  @Input()
  set hideWeekNumbers(val: DayPickerElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = booleanInput(val);
  }
  get hideWeekNumbers() {
    return this.elementRef.nativeElement.hasAttribute('hide-week-numbers');
  }
  @Input()
  set selectedDates(val: DayPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.selectedDates;
  }
  @Input()
  set selectionMode(val: DayPickerElement['selectionMode']) {
    this.elementRef.nativeElement.selectionMode = val;
  }
  get selectionMode() {
    return this.elementRef.nativeElement.selectionMode;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<DayPickerElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
