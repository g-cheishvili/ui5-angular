import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Label.js';
interface LabelElement {
  for: string;
  required: BooleanInputType;
  showColon: BooleanInputType;
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
    return this.elementRef.nativeElement.for;
  }
  @Input()
  set required(val: LabelElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set showColon(val: LabelElement['showColon']) {
    this.elementRef.nativeElement.showColon = booleanInput(val);
  }
  get showColon() {
    return this.elementRef.nativeElement.hasAttribute('show-colon');
  }
  @Input()
  set wrappingType(val: LabelElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.wrappingType;
  }

  constructor(private elementRef: ElementRef<LabelElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
