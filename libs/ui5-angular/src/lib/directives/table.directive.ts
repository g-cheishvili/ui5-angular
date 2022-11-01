import { Directive, ElementRef, Input, Output } from '@angular/core';

import { TableColumnDirective } from './table-column.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Table.js';
interface TableElement {
  accessibleName: string;
  accessibleNameRef: string;
  busy: BooleanInputType;
  busyDelay: any;
  growing: 'Button' | 'None' | 'Scroll';
  growingButtonSubtext: string;
  growingButtonText: string;
  hideNoData: BooleanInputType;
  mode: 'MultiSelect' | 'None' | 'SingleSelect';
  noDataText: string;
  stickyColumnHeader: BooleanInputType;

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
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: TableElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set busy(val: TableElement['busy']) {
    this.elementRef.nativeElement.busy = booleanInput(val);
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: TableElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.busyDelay;
  }
  @Input()
  set growing(val: TableElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing() {
    return this.elementRef.nativeElement.growing;
  }
  @Input()
  set growingButtonSubtext(val: TableElement['growingButtonSubtext']) {
    this.elementRef.nativeElement.growingButtonSubtext = val;
  }
  get growingButtonSubtext() {
    return this.elementRef.nativeElement.growingButtonSubtext;
  }
  @Input()
  set growingButtonText(val: TableElement['growingButtonText']) {
    this.elementRef.nativeElement.growingButtonText = val;
  }
  get growingButtonText() {
    return this.elementRef.nativeElement.growingButtonText;
  }
  @Input()
  set hideNoData(val: TableElement['hideNoData']) {
    this.elementRef.nativeElement.hideNoData = booleanInput(val);
  }
  get hideNoData() {
    return this.elementRef.nativeElement.hasAttribute('hide-no-data');
  }
  @Input()
  set mode(val: TableElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode() {
    return this.elementRef.nativeElement.mode;
  }
  @Input()
  set noDataText(val: TableElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText() {
    return this.elementRef.nativeElement.noDataText;
  }
  @Input()
  set stickyColumnHeader(val: TableElement['stickyColumnHeader']) {
    this.elementRef.nativeElement.stickyColumnHeader = booleanInput(val);
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
  constructor(private elementRef: ElementRef<TableElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get columns(): TableElement['columns'] {
    return this.elementRef.nativeElement.columns;
  }
}
