import { Directive, ElementRef, Input, Output } from '@angular/core';

import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/ComboBox.js';
interface ComboBoxElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  filter: string;
  loading: BooleanInputType;
  placeholder: string;
  readonly: BooleanInputType;
  required: BooleanInputType;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  icon: IconDirective['element'];
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: void;

  input: void;

  selectionChange: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-combobox',
})
export class ComboBoxDirective {
  @Input()
  set accessibleName(val: ComboBoxElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as ComboBoxElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: ComboBoxElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as ComboBoxElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: ComboBoxElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set filter(val: ComboBoxElement['filter']) {
    this.elementRef.nativeElement.filter = val;
  }
  get filter() {
    return this.elementRef.nativeElement.getAttribute(
      'filter'
    ) as unknown as ComboBoxElement['filter'];
  }
  @Input()
  set loading(val: ComboBoxElement['loading']) {
    this.elementRef.nativeElement.loading = booleanInput(val);
  }
  get loading() {
    return this.elementRef.nativeElement.hasAttribute('loading');
  }
  @Input()
  set placeholder(val: ComboBoxElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as ComboBoxElement['placeholder'];
  }
  @Input()
  set readonly(val: ComboBoxElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: ComboBoxElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set value(val: ComboBoxElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as ComboBoxElement['value'];
  }
  @Input()
  set valueState(val: ComboBoxElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as ComboBoxElement['valueState'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ComboBoxElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get icon(): ComboBoxElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  get valueStateMessage(): ComboBoxElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
