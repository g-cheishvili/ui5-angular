import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TableCell.js';
interface TableCellElement {
  // Slots
}

@Directive({
  selector: 'ui5-table-cell',
})
export class TableCellDirective {
  constructor(private elementRef: ElementRef<TableCellElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
