import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
interface FilterItemOptionElement {
  selected: BooleanInputType;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-filter-item-option',
})
export class FilterItemOptionDirective {
  @Input()
  set selected(val: FilterItemOptionElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: FilterItemOptionElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as FilterItemOptionElement['text'];
  }

  constructor(
    private elementRef: ElementRef<FilterItemOptionElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
