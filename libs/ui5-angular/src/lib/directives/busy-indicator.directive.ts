import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/BusyIndicator.js';
interface BusyIndicatorElement {
  active: BooleanInputType;
  delay: any;
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
    this.elementRef.nativeElement.active = booleanInput(val);
  }
  get active() {
    return this.elementRef.nativeElement.hasAttribute('active');
  }
  @Input()
  set delay(val: BusyIndicatorElement['delay']) {
    this.elementRef.nativeElement.delay = val;
  }
  get delay() {
    return this.elementRef.nativeElement.delay;
  }
  @Input()
  set size(val: BusyIndicatorElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size() {
    return this.elementRef.nativeElement.size;
  }
  @Input()
  set text(val: BusyIndicatorElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<BusyIndicatorElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
