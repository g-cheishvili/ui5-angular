import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
interface NotificationActionElement {
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: BooleanInputType;
  icon: string;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-notification-action',
})
export class NotificationActionDirective {
  @Input()
  set design(val: NotificationActionElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set disabled(val: NotificationActionElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: NotificationActionElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set text(val: NotificationActionElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<NotificationActionElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
