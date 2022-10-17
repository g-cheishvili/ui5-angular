import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
interface SortItemElement extends HTMLElement {
  selected: boolean;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-sort-item',
})
export class SortItemDirective {
  @Input()
  set selected(val: SortItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: SortItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as SortItemElement['text'];
  }

  constructor(private elementRef: ElementRef<SortItemElement>) {}

  get element(): SortItemElement {
    return this.elementRef.nativeElement;
  }
}
