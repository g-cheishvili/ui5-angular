import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/MonthPicker.js';
interface MonthPickerElement {
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
  selectedDates: Array<any>;

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
  set formatPattern(val: MonthPickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.formatPattern;
  }
  @Input()
  set maxDate(val: MonthPickerElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate() {
    return this.elementRef.nativeElement.maxDate;
  }
  @Input()
  set minDate(val: MonthPickerElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate() {
    return this.elementRef.nativeElement.minDate;
  }
  @Input()
  set primaryCalendarType(val: MonthPickerElement['primaryCalendarType']) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType() {
    return this.elementRef.nativeElement.primaryCalendarType;
  }
  @Input()
  set secondaryCalendarType(val: MonthPickerElement['secondaryCalendarType']) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType() {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }
  @Input()
  set selectedDates(val: MonthPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.selectedDates;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<MonthPickerElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
