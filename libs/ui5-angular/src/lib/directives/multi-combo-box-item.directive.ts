import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
interface MultiComboBoxItemElement extends HTMLElement {
  selected: boolean;
  additionalText: string;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-mcb-item',
})
export class MultiComboBoxItemDirective {
  @Input()
  set selected(val: MultiComboBoxItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set additionalText(val: MultiComboBoxItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as MultiComboBoxItemElement['additionalText'];
  }
  @Input()
  set text(val: MultiComboBoxItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as MultiComboBoxItemElement['text'];
  }

  constructor(private elementRef: ElementRef<MultiComboBoxItemElement>) {}

  get element(): MultiComboBoxItemElement {
    return this.elementRef.nativeElement;
  }
}
