import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Option.js';
interface OptionElement extends HTMLElement {
  additionalText: string;
  disabled: boolean;
  icon: string;
  selected: boolean;
  value: string;

  // Slots
}

@Directive({
  selector: 'ui5-option',
})
export class OptionDirective {
  @Input()
  set additionalText(val: OptionElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as OptionElement['additionalText'];
  }
  @Input()
  set disabled(val: OptionElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: OptionElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as OptionElement['icon'];
  }
  @Input()
  set selected(val: OptionElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set value(val: OptionElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as OptionElement['value'];
  }

  constructor(private elementRef: ElementRef<OptionElement>) {}

  get element(): OptionElement {
    return this.elementRef.nativeElement;
  }
}
