import { Directive, ElementRef, Input, Output } from '@angular/core';

import { TableColumnDirective } from './table-column.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Table.js';
interface TableElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  busy: boolean;
  busyDelay: number;
  growing: 'Button' | 'None' | 'Scroll';
  growingButtonSubtext: string;
  growingButtonText: string;
  hideNoData: boolean;
  mode: 'MultiSelect' | 'None' | 'SingleSelect';
  noDataText: string;
  stickyColumnHeader: boolean;

  // Slots
  columns: Array<TableColumnDirective['element']>;
}

interface OutputTypes {
  loadMore: void;

  popinChange: { poppedColumns: Array<any> };

  rowClick: { row: HTMLElement };

  selectionChange: {
    selectedRows: Array<any>;
    previouslySelectedRows: Array<any>;
  };
}

@Directive({
  selector: 'ui5-table',
})
export class TableDirective {
  @Input()
  set accessibleName(val: TableElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TableElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: TableElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as TableElement['accessibleNameRef'];
  }
  @Input()
  set busy(val: TableElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: TableElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.getAttribute(
      'busy-delay'
    ) as unknown as TableElement['busyDelay'];
  }
  @Input()
  set growing(val: TableElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing() {
    return this.elementRef.nativeElement.getAttribute(
      'growing'
    ) as unknown as TableElement['growing'];
  }
  @Input()
  set growingButtonSubtext(val: TableElement['growingButtonSubtext']) {
    this.elementRef.nativeElement.growingButtonSubtext = val;
  }
  get growingButtonSubtext() {
    return this.elementRef.nativeElement.getAttribute(
      'growing-button-subtext'
    ) as unknown as TableElement['growingButtonSubtext'];
  }
  @Input()
  set growingButtonText(val: TableElement['growingButtonText']) {
    this.elementRef.nativeElement.growingButtonText = val;
  }
  get growingButtonText() {
    return this.elementRef.nativeElement.getAttribute(
      'growing-button-text'
    ) as unknown as TableElement['growingButtonText'];
  }
  @Input()
  set hideNoData(val: TableElement['hideNoData']) {
    this.elementRef.nativeElement.hideNoData = val;
  }
  get hideNoData() {
    return this.elementRef.nativeElement.hasAttribute('hide-no-data');
  }
  @Input()
  set mode(val: TableElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode() {
    return this.elementRef.nativeElement.getAttribute(
      'mode'
    ) as unknown as TableElement['mode'];
  }
  @Input()
  set noDataText(val: TableElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText() {
    return this.elementRef.nativeElement.getAttribute(
      'no-data-text'
    ) as unknown as TableElement['noDataText'];
  }
  @Input()
  set stickyColumnHeader(val: TableElement['stickyColumnHeader']) {
    this.elementRef.nativeElement.stickyColumnHeader = val;
  }
  get stickyColumnHeader() {
    return this.elementRef.nativeElement.hasAttribute('sticky-column-header');
  }

  @Output('load-more') loadMore: Observable<
    CustomEvent<OutputTypes['loadMore']>
  > = new PlaceholderOutput();
  @Output('popin-change') popinChange: Observable<
    CustomEvent<OutputTypes['popinChange']>
  > = new PlaceholderOutput();
  @Output('row-click') rowClick: Observable<
    CustomEvent<OutputTypes['rowClick']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TableElement>) {}

  get element(): TableElement {
    return this.elementRef.nativeElement;
  }

  get columns(): TableElement['columns'] {
    return this.elementRef.nativeElement.columns;
  }
}
