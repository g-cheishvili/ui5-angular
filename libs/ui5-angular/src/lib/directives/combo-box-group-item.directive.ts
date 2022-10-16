import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ComboBoxGroupItem.js';
interface ComboBoxGroupItemElement extends HTMLElement {
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-cb-group-item',
})
export class ComboBoxGroupItemDirective {
  @Input()
  set text(val: ComboBoxGroupItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as ComboBoxGroupItemElement['text'];
  }

  constructor(private elementRef: ElementRef<ComboBoxGroupItemElement>) {}

  get element(): ComboBoxGroupItemElement {
    return this.elementRef.nativeElement;
  }
}
