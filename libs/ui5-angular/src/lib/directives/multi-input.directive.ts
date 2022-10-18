import { Directive, ElementRef, Input, Output } from '@angular/core';

import { TokenDirective } from './token.directive';
import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/MultiInput.js';
interface MultiInputElement {
  showValueHelpIcon: BooleanInputType;
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  maxlength: number;
  name: string;
  noTypeahead: BooleanInputType;
  placeholder: string;
  previewItem: any;
  readonly: BooleanInputType;
  required: BooleanInputType;
  showClearIcon: BooleanInputType;
  showSuggestions: BooleanInputType;
  type: 'Email' | 'Number' | 'Password' | 'Tel' | 'Text' | 'URL';
  value: string;
  valueState: 'None' | 'Success' | 'Warning' | 'Error' | 'Information';

  // Slots
  tokens: Array<TokenDirective['element']>;
  icon: Array<IconDirective['element']>;
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  tokenDelete: { token: HTMLElement };

  valueHelpTrigger: void;

  change: void;

  input: void;

  suggestionItemPreview: { item: HTMLElement; targetRef: HTMLElement };

  suggestionItemSelect: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-multi-input',
})
export class MultiInputDirective {
  @Input()
  set showValueHelpIcon(val: MultiInputElement['showValueHelpIcon']) {
    this.elementRef.nativeElement.showValueHelpIcon = booleanInput(val);
  }
  get showValueHelpIcon() {
    return this.elementRef.nativeElement.hasAttribute('show-value-help-icon');
  }
  @Input()
  set accessibleName(val: MultiInputElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as MultiInputElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: MultiInputElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as MultiInputElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: MultiInputElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set maxlength(val: MultiInputElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength() {
    return this.elementRef.nativeElement.getAttribute(
      'maxlength'
    ) as unknown as MultiInputElement['maxlength'];
  }
  @Input()
  set name(val: MultiInputElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as MultiInputElement['name'];
  }
  @Input()
  set noTypeahead(val: MultiInputElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = booleanInput(val);
  }
  get noTypeahead() {
    return this.elementRef.nativeElement.hasAttribute('no-typeahead');
  }
  @Input()
  set placeholder(val: MultiInputElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as MultiInputElement['placeholder'];
  }
  @Input()
  set previewItem(val: MultiInputElement['previewItem']) {
    this.elementRef.nativeElement.previewItem = val;
  }
  get previewItem() {
    return this.elementRef.nativeElement.getAttribute(
      'preview-item'
    ) as unknown as MultiInputElement['previewItem'];
  }
  @Input()
  set readonly(val: MultiInputElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: MultiInputElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set showClearIcon(val: MultiInputElement['showClearIcon']) {
    this.elementRef.nativeElement.showClearIcon = booleanInput(val);
  }
  get showClearIcon() {
    return this.elementRef.nativeElement.hasAttribute('show-clear-icon');
  }
  @Input()
  set showSuggestions(val: MultiInputElement['showSuggestions']) {
    this.elementRef.nativeElement.showSuggestions = booleanInput(val);
  }
  get showSuggestions() {
    return this.elementRef.nativeElement.hasAttribute('show-suggestions');
  }
  @Input()
  set type(val: MultiInputElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as MultiInputElement['type'];
  }
  @Input()
  set value(val: MultiInputElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as MultiInputElement['value'];
  }
  @Input()
  set valueState(val: MultiInputElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as MultiInputElement['valueState'];
  }

  @Output('token-delete') tokenDelete: Observable<
    CustomEvent<OutputTypes['tokenDelete']>
  > = new PlaceholderOutput();
  @Output('value-help-trigger') valueHelpTrigger: Observable<
    CustomEvent<OutputTypes['valueHelpTrigger']>
  > = new PlaceholderOutput();
  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  @Output('suggestion-item-preview') suggestionItemPreview: Observable<
    CustomEvent<OutputTypes['suggestionItemPreview']>
  > = new PlaceholderOutput();
  @Output('suggestion-item-select') suggestionItemSelect: Observable<
    CustomEvent<OutputTypes['suggestionItemSelect']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<MultiInputElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get tokens(): MultiInputElement['tokens'] {
    return this.elementRef.nativeElement.tokens;
  }

  get icon(): MultiInputElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  get valueStateMessage(): MultiInputElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
