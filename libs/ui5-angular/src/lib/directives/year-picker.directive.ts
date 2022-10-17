import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/YearPicker.js';
interface YearPickerElement extends HTMLElement {
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
  selector: 'ui5-yearpicker',
})
export class YearPickerDirective {
  @Input()
  set selectedDates(val: YearPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-dates'
    ) as unknown as YearPickerElement['selectedDates'];
  }
  @Input()
  set formatPattern(val: YearPickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as YearPickerElement['formatPattern'];
  }
  @Input()
  set maxDate(val: YearPickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.getAttribute(
      'max-date'
    ) as unknown as YearPickerElement['maxDate'];
  }
  @Input()
  set minDate(val: YearPickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.getAttribute(
      'min-date'
    ) as unknown as YearPickerElement['minDate'];
  }
  @Input()
  set primaryCalendarType(val: YearPickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-calendar-type'
    ) as unknown as YearPickerElement['primaryCalendarType'];
  }
  @Input()
  set secondaryCalendarType(val: YearPickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-calendar-type'
    ) as unknown as YearPickerElement['secondaryCalendarType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<YearPickerElement>) {}

  get element(): YearPickerElement {
    return this.elementRef.nativeElement;
  }
}
