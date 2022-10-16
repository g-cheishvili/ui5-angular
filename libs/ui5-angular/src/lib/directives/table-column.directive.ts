import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/TableColumn.js';
interface TableColumnElement extends HTMLElement {
  demandPopin: boolean;
  minWidth: number;
  popinText: string;

  // Slots
}

@Directive({
  selector: 'ui5-table-column',
})
export class TableColumnDirective {
  @Input()
  set demandPopin(val: TableColumnElement['demandPopin']) {
    this.elementRef.nativeElement.demandPopin = val;
  }
  get demandPopin() {
    return this.elementRef.nativeElement.hasAttribute('demand-popin');
  }
  @Input()
  set minWidth(val: TableColumnElement['minWidth']) {
    this.elementRef.nativeElement.minWidth = val;
  }
  get minWidth() {
    return this.elementRef.nativeElement.getAttribute(
      'min-width'
    ) as unknown as TableColumnElement['minWidth'];
  }
  @Input()
  set popinText(val: TableColumnElement['popinText']) {
    this.elementRef.nativeElement.popinText = val;
  }
  get popinText() {
    return this.elementRef.nativeElement.getAttribute(
      'popin-text'
    ) as unknown as TableColumnElement['popinText'];
  }

  constructor(private elementRef: ElementRef<TableColumnElement>) {}

  get element(): TableColumnElement {
    return this.elementRef.nativeElement;
  }
}
