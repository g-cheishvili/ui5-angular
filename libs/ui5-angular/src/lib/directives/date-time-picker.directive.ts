import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/DateTimePicker.js';
interface DateTimePickerElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-datetime-picker',
})
export class DateTimePickerDirective {
  constructor(private elementRef: ElementRef<DateTimePickerElement>) {}

  get element(): DateTimePickerElement {
    return this.elementRef.nativeElement;
  }
}
