import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/TextArea.js';
interface TextAreaElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  growing: boolean;
  growingMaxLines: number;
  maxlength: number;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  rows: number;
  showExceededText: boolean;
  value: string;
  valueState: any;

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
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TextAreaElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: TextAreaElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as TextAreaElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: TextAreaElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set growing(val: TextAreaElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing() {
    return this.elementRef.nativeElement.hasAttribute('growing');
  }
  @Input()
  set growingMaxLines(val: TextAreaElement['growingMaxLines']) {
    this.elementRef.nativeElement.growingMaxLines = val;
  }
  get growingMaxLines() {
    return this.elementRef.nativeElement.getAttribute(
      'growing-max-lines'
    ) as unknown as TextAreaElement['growingMaxLines'];
  }
  @Input()
  set maxlength(val: TextAreaElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength() {
    return this.elementRef.nativeElement.getAttribute(
      'maxlength'
    ) as unknown as TextAreaElement['maxlength'];
  }
  @Input()
  set name(val: TextAreaElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as TextAreaElement['name'];
  }
  @Input()
  set placeholder(val: TextAreaElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as TextAreaElement['placeholder'];
  }
  @Input()
  set readonly(val: TextAreaElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set required(val: TextAreaElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }
  @Input()
  set rows(val: TextAreaElement['rows']) {
    this.elementRef.nativeElement.rows = val;
  }
  get rows() {
    return this.elementRef.nativeElement.getAttribute(
      'rows'
    ) as unknown as TextAreaElement['rows'];
  }
  @Input()
  set showExceededText(val: TextAreaElement['showExceededText']) {
    this.elementRef.nativeElement.showExceededText = val;
  }
  get showExceededText() {
    return this.elementRef.nativeElement.hasAttribute('show-exceeded-text');
  }
  @Input()
  set value(val: TextAreaElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as TextAreaElement['value'];
  }
  @Input()
  set valueState(val: TextAreaElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as TextAreaElement['valueState'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TextAreaElement>) {}

  get element(): TextAreaElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): TextAreaElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
