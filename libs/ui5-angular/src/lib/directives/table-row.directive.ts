import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/TableRow.js';
interface TableRowElement extends HTMLElement {
  selected: boolean;
  type: 'Active' | 'Inactive';

  // Slots
}

@Directive({
  selector: 'ui5-table-row',
})
export class TableRowDirective {
  @Input()
  set selected(val: TableRowElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set type(val: TableRowElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as TableRowElement['type'];
  }

  constructor(private elementRef: ElementRef<TableRowElement>) {}

  get element(): TableRowElement {
    return this.elementRef.nativeElement;
  }
}
