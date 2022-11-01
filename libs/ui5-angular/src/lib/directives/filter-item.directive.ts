import { Directive, ElementRef, Input } from '@angular/core';

import { FilterItemOptionDirective } from './filter-item-option.directive';

import '@ui5/webcomponents-fiori/dist/FilterItem.js';
interface FilterItemElement {
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
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<FilterItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get values(): FilterItemElement['values'] {
    return this.elementRef.nativeElement.values;
  }
}
