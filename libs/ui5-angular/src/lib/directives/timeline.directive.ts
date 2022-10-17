import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/Timeline.js';
interface TimelineElement extends HTMLElement {
  accessibleName: string;
  layout: 'Horizontal' | 'Vertical';

  // Slots
}

@Directive({
  selector: 'ui5-timeline',
})
export class TimelineDirective {
  @Input()
  set accessibleName(val: TimelineElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TimelineElement['accessibleName'];
  }
  @Input()
  set layout(val: TimelineElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout() {
    return this.elementRef.nativeElement.getAttribute(
      'layout'
    ) as unknown as TimelineElement['layout'];
  }

  constructor(private elementRef: ElementRef<TimelineElement>) {}

  get element(): TimelineElement {
    return this.elementRef.nativeElement;
  }
}
