import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/YearPicker.js';
interface YearPickerElement extends HTMLElement {
  selectedDates: Array<any>;

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

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<YearPickerElement>) {}

  get element(): YearPickerElement {
    return this.elementRef.nativeElement;
  }
}
