import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/Tree.js';
interface TreeElement {
  accessibleName: string;
  accessibleNameRef: string;
  footerText: string;
  headerText: string;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataText: string;

  // Slots
  header: Array<HTMLElement>;
}

interface OutputTypes {
  itemClick: { item: HTMLElement };

  itemDelete: { item: HTMLElement };

  itemMouseout: { item: HTMLElement };

  itemMouseover: { item: HTMLElement };

  itemToggle: { item: HTMLElement };

  selectionChange: {
    selectedItems: Array<any>;
    previouslySelectedItems: Array<any>;
    targetItem: HTMLElement;
  };
}

@Directive({
  selector: 'ui5-tree',
})
export class TreeDirective {
  @Input()
  set accessibleName(val: TreeElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TreeElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: TreeElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as TreeElement['accessibleNameRef'];
  }
  @Input()
  set footerText(val: TreeElement['footerText']) {
    this.elementRef.nativeElement.footerText = val;
  }
  get footerText() {
    return this.elementRef.nativeElement.getAttribute(
      'footer-text'
    ) as unknown as TreeElement['footerText'];
  }
  @Input()
  set headerText(val: TreeElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.getAttribute(
      'header-text'
    ) as unknown as TreeElement['headerText'];
  }
  @Input()
  set mode(val: TreeElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode() {
    return this.elementRef.nativeElement.getAttribute(
      'mode'
    ) as unknown as TreeElement['mode'];
  }
  @Input()
  set noDataText(val: TreeElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText() {
    return this.elementRef.nativeElement.getAttribute(
      'no-data-text'
    ) as unknown as TreeElement['noDataText'];
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  @Output('item-delete') itemDelete: Observable<
    CustomEvent<OutputTypes['itemDelete']>
  > = new PlaceholderOutput();
  @Output('item-mouseout') itemMouseout: Observable<
    CustomEvent<OutputTypes['itemMouseout']>
  > = new PlaceholderOutput();
  @Output('item-mouseover') itemMouseover: Observable<
    CustomEvent<OutputTypes['itemMouseover']>
  > = new PlaceholderOutput();
  @Output('item-toggle') itemToggle: Observable<
    CustomEvent<OutputTypes['itemToggle']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TreeElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get header(): TreeElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
