import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TableRow.js';
interface TableRowElement {
  navigated: BooleanInputType;
  selected: BooleanInputType;
  type: 'Active' | 'Inactive';

  // Slots
}

@Directive({
  selector: 'ui5-table-row',
})
export class TableRowDirective {
  @Input()
  set navigated(val: TableRowElement['navigated']) {
    this.elementRef.nativeElement.navigated = booleanInput(val);
  }
  get navigated() {
    return this.elementRef.nativeElement.hasAttribute('navigated');
  }
  @Input()
  set selected(val: TableRowElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set type(val: TableRowElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.type;
  }

  constructor(private elementRef: ElementRef<TableRowElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
