import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/RadioButton.js';
interface RadioButtonElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  disabled: boolean;
  name: string;
  readonly: boolean;
  text: string;
  value: string;
  valueState: any;
  wrappingType: 'None' | 'Normal';

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-radio-button',
})
export class RadioButtonDirective {
  @Input()
  set accessibleName(val: RadioButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as RadioButtonElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: RadioButtonElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as RadioButtonElement['accessibleNameRef'];
  }
  @Input()
  set checked(val: RadioButtonElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked() {
    return this.elementRef.nativeElement.hasAttribute('checked');
  }
  @Input()
  set disabled(val: RadioButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set name(val: RadioButtonElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as RadioButtonElement['name'];
  }
  @Input()
  set readonly(val: RadioButtonElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set text(val: RadioButtonElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as RadioButtonElement['text'];
  }
  @Input()
  set value(val: RadioButtonElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as RadioButtonElement['value'];
  }
  @Input()
  set valueState(val: RadioButtonElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as RadioButtonElement['valueState'];
  }
  @Input()
  set wrappingType(val: RadioButtonElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as RadioButtonElement['wrappingType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<RadioButtonElement>) {}

  get element(): RadioButtonElement {
    return this.elementRef.nativeElement;
  }
}
