import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/CalendarDate.js';
interface CalendarDateElement extends HTMLElement {
  value: string;

  // Slots
}

@Directive({
  selector: 'ui5-date',
})
export class CalendarDateDirective {
  @Input()
  set value(val: CalendarDateElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as CalendarDateElement['value'];
  }

  constructor(private elementRef: ElementRef<CalendarDateElement>) {}

  get element(): CalendarDateElement {
    return this.elementRef.nativeElement;
  }
}
