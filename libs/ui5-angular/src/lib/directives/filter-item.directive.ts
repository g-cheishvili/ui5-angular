import { Directive, ElementRef, Input } from '@angular/core';

import { FilterItemOptionDirective } from './filter-item-option.directive';

import '@ui5/webcomponents-fiori/dist/FilterItem.js';
interface FilterItemElement extends HTMLElement {
  text: string;

  // Slots
  values: Array<FilterItemOptionDirective['element']>;
}

@Directive({
  selector: 'ui5-filter-item',
})
export class FilterItemDirective {
  @Input()
  set text(val: FilterItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as FilterItemElement['text'];
  }

  constructor(private elementRef: ElementRef<FilterItemElement>) {}

  get element(): FilterItemElement {
    return this.elementRef.nativeElement;
  }

  get values(): FilterItemElement['values'] {
    return this.elementRef.nativeElement.values;
  }
}
