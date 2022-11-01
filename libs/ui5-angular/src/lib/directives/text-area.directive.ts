import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TextArea.js';
interface TextAreaElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: BooleanInputType;
  growing: BooleanInputType;
  growingMaxLines: any;
  maxlength: any;
  name: string;
  placeholder: string;
  readonly: BooleanInputType;
  required: BooleanInputType;
  rows: any;
  showExceededText: BooleanInputType;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  // Slots
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: void;

  input: void;
}

@Directive({
  selector: 'ui5-textarea',
})
export class TextAreaDirective {
  @Input()
  set accessibleName(val: TextAreaElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: TextAreaElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set disabled(val: TextAreaElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set growing(val: TextAreaElement['growing']) {
    this.elementRef.nativeElement.growing = booleanInput(val);
  }
  get growing() {
    return this.elementRef.nativeElement.hasAttribute('growing');
  }
  @Input()
  set growingMaxLines(val: TextAreaElement['growingMaxLines']) {
    this.elementRef.nativeElement.growingMaxLines = val;
  }
  get growingMaxLines() {
    return this.elementRef.nativeElement.growingMaxLines;
  }
  @Input()
  set maxlength(val: TextAreaElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength() {
    return this.elementRef.nativeElement.maxlength;
  }
  @Input()
  set name(val: TextAreaElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set placeholder(val: TextAreaElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.placeholder;
  }
  @Input()
  set readonly(val: TextAreaElement['readonly']) {
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: TextAreaElement['required']) {
    this.elementRef.nativeElement.required = booleanInput(val);
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set rows(val: TextAreaElement['rows']) {
    this.elementRef.nativeElement.rows = val;
  }
  get rows() {
    return this.elementRef.nativeElement.rows;
  }
  @Input()
  set showExceededText(val: TextAreaElement['showExceededText']) {
    this.elementRef.nativeElement.showExceededText = booleanInput(val);
  }
  get showExceededText() {
    return this.elementRef.nativeElement.hasAttribute('show-exceeded-text');
  }
  @Input()
  set value(val: TextAreaElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.value;
  }
  @Input()
  set valueState(val: TextAreaElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.valueState;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TextAreaElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): TextAreaElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
