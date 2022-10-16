import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/MonthPicker.js';
interface MonthPickerElement extends HTMLElement {
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
  set selectedDates(val: MonthPickerElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-dates'
    ) as unknown as MonthPickerElement['selectedDates'];
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
