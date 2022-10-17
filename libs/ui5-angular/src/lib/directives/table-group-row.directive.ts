import { Directive, ElementRef } from '@angular/core';

import '@ui5/webcomponents/dist/TableGroupRow.js';
interface TableGroupRowElement {
  // Slots
}

@Directive({
  selector: 'ui5-table-group-row',
})
export class TableGroupRowDirective {
  constructor(
    private elementRef: ElementRef<TableGroupRowElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
