import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/UploadCollection.js';
interface UploadCollectionElement {
  accessibleName: string;
  hideDragOverlay: BooleanInputType;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataDescription: string;
  noDataText: string;

  // Slots
  header: Array<HTMLElement>;
}

interface OutputTypes {
  drop: { dataTransfer: any };

  itemDelete: { item: HTMLElement };

  selectionChange: { selectedItems: Array<any> };
}

@Directive({
  selector: 'ui5-upload-collection',
})
export class UploadCollectionDirective {
  @Input()
  set accessibleName(val: UploadCollectionElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as UploadCollectionElement['accessibleName'];
  }
  @Input()
  set hideDragOverlay(val: UploadCollectionElement['hideDragOverlay']) {
    this.elementRef.nativeElement.hideDragOverlay = booleanInput(val);
  }
  get hideDragOverlay() {
    return this.elementRef.nativeElement.hasAttribute('hide-drag-overlay');
  }
  @Input()
  set mode(val: UploadCollectionElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode() {
    return this.elementRef.nativeElement.getAttribute(
      'mode'
    ) as unknown as UploadCollectionElement['mode'];
  }
  @Input()
  set noDataDescription(val: UploadCollectionElement['noDataDescription']) {
    this.elementRef.nativeElement.noDataDescription = val;
  }
  get noDataDescription() {
    return this.elementRef.nativeElement.getAttribute(
      'no-data-description'
    ) as unknown as UploadCollectionElement['noDataDescription'];
  }
  @Input()
  set noDataText(val: UploadCollectionElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText() {
    return this.elementRef.nativeElement.getAttribute(
      'no-data-text'
    ) as unknown as UploadCollectionElement['noDataText'];
  }

  @Output() drop: Observable<CustomEvent<OutputTypes['drop']>> =
    new PlaceholderOutput();
  @Output('item-delete') itemDelete: Observable<
    CustomEvent<OutputTypes['itemDelete']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<UploadCollectionElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get header(): UploadCollectionElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
