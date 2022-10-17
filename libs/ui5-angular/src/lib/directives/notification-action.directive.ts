import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
interface NotificationActionElement extends HTMLElement {
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
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
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as NotificationActionElement['design'];
  }
  @Input()
  set disabled(val: NotificationActionElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: NotificationActionElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as NotificationActionElement['icon'];
  }
  @Input()
  set text(val: NotificationActionElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as NotificationActionElement['text'];
  }

  constructor(private elementRef: ElementRef<NotificationActionElement>) {}

  get element(): NotificationActionElement {
    return this.elementRef.nativeElement;
  }
}
