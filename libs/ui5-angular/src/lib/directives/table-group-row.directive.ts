import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TableGroupRow.js';
interface TableGroupRowElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-table-group-row',
})
export class TableGroupRowDirective {
  constructor(private elementRef: ElementRef<TableGroupRowElement>) {}

  get element(): TableGroupRowElement {
    return this.elementRef.nativeElement;
  }
}
