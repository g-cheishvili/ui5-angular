import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/MonthPicker.js';
interface MonthPickerElement extends HTMLElement {
  selectedDates: Array<any>;
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
  selector: 'ui5-monthpicker',
})
export class MonthPickerDirective {
  @Input()
  set selectedDates(val: MonthPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-dates'
    ) as unknown as MonthPickerElement['selectedDates'];
  }
  @Input()
  set formatPattern(val: MonthPickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as MonthPickerElement['formatPattern'];
  }
  @Input()
  set maxDate(val: MonthPickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.getAttribute(
      'max-date'
    ) as unknown as MonthPickerElement['maxDate'];
  }
  @Input()
  set minDate(val: MonthPickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.getAttribute(
      'min-date'
    ) as unknown as MonthPickerElement['minDate'];
  }
  @Input()
  set primaryCalendarType(val: MonthPickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-calendar-type'
    ) as unknown as MonthPickerElement['primaryCalendarType'];
  }
  @Input()
  set secondaryCalendarType(val: MonthPickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-calendar-type'
    ) as unknown as MonthPickerElement['secondaryCalendarType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<MonthPickerElement>) {}

  get element(): MonthPickerElement {
    return this.elementRef.nativeElement;
  }
}
