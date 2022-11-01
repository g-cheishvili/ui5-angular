import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
interface ComboBoxItemElement {
  additionalText: string;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-cb-item',
})
export class ComboBoxItemDirective {
  @Input()
  set additionalText(val: ComboBoxItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.additionalText;
  }
  @Input()
  set text(val: ComboBoxItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<ComboBoxItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
