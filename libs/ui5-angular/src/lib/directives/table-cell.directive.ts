import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TableCell.js';
interface TableCellElement extends HTMLElement {
  // Slots
}

@Directive({
  selector: 'ui5-table-cell',
})
export class TableCellDirective {
  constructor(private elementRef: ElementRef<TableCellElement>) {}

  get element(): TableCellElement {
    return this.elementRef.nativeElement;
  }
}
