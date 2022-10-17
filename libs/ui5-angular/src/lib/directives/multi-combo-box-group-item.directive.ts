import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js';
interface MultiComboBoxGroupItemElement {
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-mcb-group-item',
})
export class MultiComboBoxGroupItemDirective {
  @Input()
  set text(val: MultiComboBoxGroupItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as MultiComboBoxGroupItemElement['text'];
  }

  constructor(
    private elementRef: ElementRef<MultiComboBoxGroupItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
