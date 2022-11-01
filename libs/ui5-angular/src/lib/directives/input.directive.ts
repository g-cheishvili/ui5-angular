import { Directive, ElementRef, Input, Output } from '@angular/core';

import { SuggestionGroupItemDirective } from './suggestion-group-item.directive';
import { SuggestionItemDirective } from './suggestion-item.directive';
import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Input.js';
interface InputElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  maxlength: any;
  name: string;
  noTypeahead: BooleanInputType;
  placeholder: string;
  previewItem:
    | SuggestionGroupItemDirective['element']
    | SuggestionItemDirective['element'];
  readonly: BooleanInputType;
  required: BooleanInputType;
  showClearIcon: BooleanInputType;
  showSuggestions: BooleanInputType;
  type: 'Email' | 'Number' | 'Password' | 'Tel' | 'Text' | 'URL';
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  icon: Array<IconDirective['element']>;
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: void;

  input: void;

  suggestionItemPreview: { item: HTMLElement; targetRef: HTMLElement };

  suggestionItemSelect: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-input',
})
export class InputDirective {
  @Input()
  set accessibleName(val: InputElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as InputElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: InputElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as InputElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: InputElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set maxlength(val: InputElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength() {
    return this.elementRef.nativeElement.getAttribute(
      'maxlength'
    ) as unknown as InputElement['maxlength'];
  }
  @Input()
  set name(val: InputElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as InputElement['name'];
  }
  @Input()
  set noTypeahead(val: InputElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = booleanInput(val);
  }
  get noTypeahead() {
    return this.elementRef.nativeElement.hasAttribute('no-typeahead');
  }
  @Input()
  set placeholder(val: InputElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as InputElement['placeholder'];
  }
  @Input()
  set previewItem(val: InputElement['previewItem']) {
    this.elementRef.nativeElement.previewItem = val;
  }
  get previewItem() {
    return this.elementRef.nativeElement.getAttribute(
      'preview-item'
    ) as unknown as InputElement['previewItem'];
  }
  @Input()
  set readonly(val: InputElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: InputElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set showClearIcon(val: InputElement['showClearIcon']) {
    this.elementRef.nativeElement.showClearIcon = booleanInput(val);
  }
  get showClearIcon() {
    return this.elementRef.nativeElement.hasAttribute('show-clear-icon');
  }
  @Input()
  set showSuggestions(val: InputElement['showSuggestions']) {
    this.elementRef.nativeElement.showSuggestions = booleanInput(val);
  }
  get showSuggestions() {
    return this.elementRef.nativeElement.hasAttribute('show-suggestions');
  }
  @Input()
  set type(val: InputElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as InputElement['type'];
  }
  @Input()
  set value(val: InputElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as InputElement['value'];
  }
  @Input()
  set valueState(val: InputElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as InputElement['valueState'];
  }

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
  constructor(private elementRef: ElementRef<InputElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get icon(): InputElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  get valueStateMessage(): InputElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
