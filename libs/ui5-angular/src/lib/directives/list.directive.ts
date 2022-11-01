import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/List.js';
interface ListElement {
  accessibleName: string;
  accessibleNameRef: string;
  accessibleRole: string;
  busy: BooleanInputType;
  busyDelay: any;
  footerText: string;
  growing: 'Button' | 'None' | 'Scroll';
  headerText: string;
  indent: BooleanInputType;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataText: string;
  separators: 'All' | 'Inner' | 'None';

  // Slots
  header: Array<HTMLElement>;
}

interface OutputTypes {
  itemClick: { item: HTMLElement };

  itemClose: { item: HTMLElement };

  itemDelete: { item: HTMLElement };

  itemToggle: { item: HTMLElement };

  loadMore: void;

  selectionChange: {
    selectedItems: Array<any>;
    previouslySelectedItems: Array<any>;
  };
}

@Directive({
  selector: 'ui5-list',
})
export class ListDirective {
  @Input()
  set accessibleName(val: ListElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as ListElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: ListElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as ListElement['accessibleNameRef'];
  }
  @Input()
  set accessibleRole(val: ListElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-role'
    ) as unknown as ListElement['accessibleRole'];
  }
  @Input()
  set busy(val: ListElement['busy']) {
    this.elementRef.nativeElement.busy = booleanInput(val);
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: ListElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.getAttribute(
      'busy-delay'
    ) as unknown as ListElement['busyDelay'];
  }
  @Input()
  set footerText(val: ListElement['footerText']) {
    this.elementRef.nativeElement.footerText = val;
  }
  get footerText() {
    return this.elementRef.nativeElement.getAttribute(
      'footer-text'
    ) as unknown as ListElement['footerText'];
  }
  @Input()
  set growing(val: ListElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing() {
    return this.elementRef.nativeElement.getAttribute(
      'growing'
    ) as unknown as ListElement['growing'];
  }
  @Input()
  set headerText(val: ListElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.getAttribute(
      'header-text'
    ) as unknown as ListElement['headerText'];
  }
  @Input()
  set indent(val: ListElement['indent']) {
    this.elementRef.nativeElement.indent = booleanInput(val);
  }
  get indent() {
    return this.elementRef.nativeElement.hasAttribute('indent');
  }
  @Input()
  set mode(val: ListElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode() {
    return this.elementRef.nativeElement.getAttribute(
      'mode'
    ) as unknown as ListElement['mode'];
  }
  @Input()
  set noDataText(val: ListElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText() {
    return this.elementRef.nativeElement.getAttribute(
      'no-data-text'
    ) as unknown as ListElement['noDataText'];
  }
  @Input()
  set separators(val: ListElement['separators']) {
    this.elementRef.nativeElement.separators = val;
  }
  get separators() {
    return this.elementRef.nativeElement.getAttribute(
      'separators'
    ) as unknown as ListElement['separators'];
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  @Output('item-close') itemClose: Observable<
    CustomEvent<OutputTypes['itemClose']>
  > = new PlaceholderOutput();
  @Output('item-delete') itemDelete: Observable<
    CustomEvent<OutputTypes['itemDelete']>
  > = new PlaceholderOutput();
  @Output('item-toggle') itemToggle: Observable<
    CustomEvent<OutputTypes['itemToggle']>
  > = new PlaceholderOutput();
  @Output('load-more') loadMore: Observable<
    CustomEvent<OutputTypes['loadMore']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ListElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get header(): ListElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
