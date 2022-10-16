import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/DayPicker.js';
interface DayPickerElement extends HTMLElement {
  hideWeekNumbers: boolean;
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

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<DayPickerElement>) {}

  get element(): DayPickerElement {
    return this.elementRef.nativeElement;
  }
}
