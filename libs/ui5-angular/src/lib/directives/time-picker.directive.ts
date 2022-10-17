import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/TimePicker.js';
interface TimePickerElement extends HTMLElement {
  dateValue: any;
  disabled: boolean;
  formatPattern: string;
  placeholder: string;
  readonly: boolean;
  value: string;
  valueState: any;

  // Slots
  valueStateMessage: HTMLElement;
}

interface OutputTypes {
  change: void;

  input: void;
}

@Directive({
  selector: 'ui5-time-picker',
})
export class TimePickerDirective {
  @Input()
  set dateValue(val: TimePickerElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue() {
    return this.elementRef.nativeElement.getAttribute(
      'date-value'
    ) as unknown as TimePickerElement['dateValue'];
  }
  @Input()
  set disabled(val: TimePickerElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set formatPattern(val: TimePickerElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern() {
    return this.elementRef.nativeElement.getAttribute(
      'format-pattern'
    ) as unknown as TimePickerElement['formatPattern'];
  }
  @Input()
  set placeholder(val: TimePickerElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as TimePickerElement['placeholder'];
  }
  @Input()
  set readonly(val: TimePickerElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set value(val: TimePickerElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as TimePickerElement['value'];
  }
  @Input()
  set valueState(val: TimePickerElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as TimePickerElement['valueState'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  @Output() input: Observable<CustomEvent<OutputTypes['input']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TimePickerElement>) {}

  get element(): TimePickerElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): TimePickerElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
