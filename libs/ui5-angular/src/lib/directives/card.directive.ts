import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Card.js';
interface CardElement {
  accessibleName: string;
  accessibleNameRef: string;

  // Slots
  header: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-card',
})
export class CardDirective {
  @Input()
  set accessibleName(val: CardElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: CardElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  constructor(private elementRef: ElementRef<CardElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get header(): CardElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
