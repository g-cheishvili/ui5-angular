import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Calendar.js';
interface CalendarElement extends HTMLElement {
  hideWeekNumbers: boolean;
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
  set hideWeekNumbers(val: CalendarElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
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
  constructor(private elementRef: ElementRef<CalendarElement>) {}

  get element(): CalendarElement {
    return this.elementRef.nativeElement;
  }
}
