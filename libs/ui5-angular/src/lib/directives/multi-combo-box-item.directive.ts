import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
interface MultiComboBoxItemElement extends HTMLElement {
  selected: boolean;

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

  constructor(private elementRef: ElementRef<MultiComboBoxItemElement>) {}

  get element(): MultiComboBoxItemElement {
    return this.elementRef.nativeElement;
  }
}
