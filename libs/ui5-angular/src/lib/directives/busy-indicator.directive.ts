import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/BusyIndicator.js';
interface BusyIndicatorElement extends HTMLElement {
  active: boolean;
  delay: number;
  size: 'Large' | 'Medium' | 'Small';
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-busy-indicator',
})
export class BusyIndicatorDirective {
  @Input()
  set active(val: BusyIndicatorElement['active']) {
    this.elementRef.nativeElement.active = val;
  }
  get active() {
    return this.elementRef.nativeElement.hasAttribute('active');
  }
  @Input()
  set delay(val: BusyIndicatorElement['delay']) {
    this.elementRef.nativeElement.delay = val;
  }
  get delay() {
    return this.elementRef.nativeElement.getAttribute(
      'delay'
    ) as unknown as BusyIndicatorElement['delay'];
  }
  @Input()
  set size(val: BusyIndicatorElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size() {
    return this.elementRef.nativeElement.getAttribute(
      'size'
    ) as unknown as BusyIndicatorElement['size'];
  }
  @Input()
  set text(val: BusyIndicatorElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as BusyIndicatorElement['text'];
  }

  constructor(private elementRef: ElementRef<BusyIndicatorElement>) {}

  get element(): BusyIndicatorElement {
    return this.elementRef.nativeElement;
  }
}
