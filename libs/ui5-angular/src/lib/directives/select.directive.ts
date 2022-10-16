import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Select.js';
interface SelectElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  name: string;
  required: boolean;
  selectedOption: any;
  valueState: any;

  // Slots
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: { selectedOption: HTMLElement };
}

@Directive({
  selector: 'ui5-select',
})
export class SelectDirective {
  @Input()
  set accessibleName(val: SelectElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SelectElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: SelectElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as SelectElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: SelectElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set name(val: SelectElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as SelectElement['name'];
  }
  @Input()
  set required(val: SelectElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set selectedOption(val: SelectElement['selectedOption']) {
    this.elementRef.nativeElement.selectedOption = val;
  }
  get selectedOption() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-option'
    ) as unknown as SelectElement['selectedOption'];
  }
  @Input()
  set valueState(val: SelectElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as SelectElement['valueState'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SelectElement>) {}

  get element(): SelectElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): SelectElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
