import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Label.js';
interface LabelElement extends HTMLElement {
  for: string;
  required: boolean;
  showColon: boolean;
  wrappingType: 'None' | 'Normal';

  // Slots
}

@Directive({
  selector: 'ui5-label',
})
export class LabelDirective {
  @Input()
  set for(val: LabelElement['for']) {
    this.elementRef.nativeElement.for = val;
  }
  get for() {
    return this.elementRef.nativeElement.getAttribute(
      'for'
    ) as unknown as LabelElement['for'];
  }
  @Input()
  set required(val: LabelElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set showColon(val: LabelElement['showColon']) {
    this.elementRef.nativeElement.showColon = val;
  }
  get showColon() {
    return this.elementRef.nativeElement.hasAttribute('show-colon');
  }
  @Input()
  set wrappingType(val: LabelElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as LabelElement['wrappingType'];
  }

  constructor(private elementRef: ElementRef<LabelElement>) {}

  get element(): LabelElement {
    return this.elementRef.nativeElement;
  }
}
