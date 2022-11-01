import { Directive, ElementRef, Input, Output } from '@angular/core';

import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/MultiComboBox.js';
interface MultiComboBoxElement {
  accessibleName: string;
  accessibleNameRef: string;
  allowCustomValues: BooleanInputType;
  disabled: BooleanInputType;
  filter: string;
  noTypeahead: BooleanInputType;
  open: BooleanInputType;
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

  openChange: void;

  selectionChange: { items: Array<any> };
}

@Directive({
  selector: 'ui5-multi-combobox',
})
export class MultiComboBoxDirective {
  @Input()
  set accessibleName(val: MultiComboBoxElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: MultiComboBoxElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set allowCustomValues(val: MultiComboBoxElement['allowCustomValues']) {
    this.elementRef.nativeElement.allowCustomValues = booleanInput(val);
  }
  get allowCustomValues() {
    return this.elementRef.nativeElement.hasAttribute('allow-custom-values');
  }
  @Input()
  set disabled(val: MultiComboBoxElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set filter(val: MultiComboBoxElement['filter']) {
    this.elementRef.nativeElement.filter = val;
  }
  get filter() {
    return this.elementRef.nativeElement.filter;
  }
  @Input()
  set noTypeahead(val: MultiComboBoxElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = booleanInput(val);
  }
  get noTypeahead() {
    return this.elementRef.nativeElement.hasAttribute('no-typeahead');
  }
  @Input()
  set open(val: MultiComboBoxElement['open']) {
    this.elementRef.nativeElement.open = booleanInput(val);
  }
  get open() {
    return this.elementRef.nativeElement.hasAttribute('open');
  }
  @Input()
  set placeholder(val: MultiComboBoxElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.placeholder;
  }
  @Input()
  set readonly(val: MultiComboBoxElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: MultiComboBoxElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set value(val: MultiComboBoxElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valueState(val: MultiComboBoxElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  @Output('open-change') openChange: Observable<
    CustomEvent<OutputTypes['openChange']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<MultiComboBoxElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get icon(): MultiComboBoxElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  get valueStateMessage(): MultiComboBoxElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
