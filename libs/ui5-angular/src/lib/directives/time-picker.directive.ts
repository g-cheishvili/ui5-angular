import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/TimePicker.js';
interface TimePickerElement extends HTMLElement {
  dateValue: any;

  // Slots
}

@Directive({
  selector: 'ui5-time-picker',
})
export class TimePickerDirective {
  @Input()
  set dateValue(val: TimePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'date-value'
    ) as unknown as TimePickerElement['dateValue'];
  }

  constructor(private elementRef: ElementRef<TimePickerElement>) {}

  get element(): TimePickerElement {
    return this.elementRef.nativeElement;
  }
}
