import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/CheckBox.js';
interface CheckBoxElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
  name: string;
  readonly: boolean;
  required: boolean;
  text: string;
  valueState: any;
  wrappingType: 'None' | 'Normal';

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-checkbox',
})
export class CheckBoxDirective {
  @Input()
  set accessibleName(val: CheckBoxElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as CheckBoxElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: CheckBoxElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as CheckBoxElement['accessibleNameRef'];
  }
  @Input()
  set checked(val: CheckBoxElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked() {
    return this.elementRef.nativeElement.hasAttribute('checked');
  }
  @Input()
  set disabled(val: CheckBoxElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set indeterminate(val: CheckBoxElement['indeterminate']) {
    this.elementRef.nativeElement.indeterminate = val;
  }
  get indeterminate() {
    return this.elementRef.nativeElement.hasAttribute('indeterminate');
  }
  @Input()
  set name(val: CheckBoxElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as CheckBoxElement['name'];
  }
  @Input()
  set readonly(val: CheckBoxElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: CheckBoxElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set text(val: CheckBoxElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as CheckBoxElement['text'];
  }
  @Input()
  set valueState(val: CheckBoxElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as CheckBoxElement['valueState'];
  }
  @Input()
  set wrappingType(val: CheckBoxElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as CheckBoxElement['wrappingType'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<CheckBoxElement>) {}

  get element(): CheckBoxElement {
    return this.elementRef.nativeElement;
  }
}
