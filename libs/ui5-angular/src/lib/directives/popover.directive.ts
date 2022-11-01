import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Popover.js';
interface PopoverElement {
  accessibleName: string;
  accessibleNameRef: string;
  initialFocus: string;
  open: BooleanInputType;
  preventFocusRestore: BooleanInputType;
  allowTargetOverlap: BooleanInputType;
  headerText: string;
  hideArrow: BooleanInputType;
  hideBackdrop: BooleanInputType;
  horizontalAlign: 'Center' | 'Left' | 'Right' | 'Stretch';
  modal: BooleanInputType;
  opener: any;
  placementType: 'Bottom' | 'Left' | 'Right' | 'Top';
  verticalAlign: 'Bottom' | 'Center' | 'Stretch' | 'Top';

  // Slots
  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;
}

interface OutputTypes {
  afterClose: void;

  afterOpen: void;

  beforeClose: { escPressed: boolean };

  beforeOpen: void;
}

@Directive({
  selector: 'ui5-popover',
})
export class PopoverDirective {
  @Input()
  set accessibleName(val: PopoverElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as PopoverElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: PopoverElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as PopoverElement['accessibleNameRef'];
  }
  @Input()
  set initialFocus(val: PopoverElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus() {
    return this.elementRef.nativeElement.getAttribute(
      'initial-focus'
    ) as unknown as PopoverElement['initialFocus'];
  }
  @Input()
  set open(val: PopoverElement['open']) {
    this.elementRef.nativeElement.open = booleanInput(val);
  }
  get open() {
    return this.elementRef.nativeElement.hasAttribute('open');
  }
  @Input()
  set preventFocusRestore(val: PopoverElement['preventFocusRestore']) {
    this.elementRef.nativeElement.preventFocusRestore = booleanInput(val);
  }
  get preventFocusRestore() {
    return this.elementRef.nativeElement.hasAttribute('prevent-focus-restore');
  }
  @Input()
  set allowTargetOverlap(val: PopoverElement['allowTargetOverlap']) {
    this.elementRef.nativeElement.allowTargetOverlap = booleanInput(val);
  }
  get allowTargetOverlap() {
    return this.elementRef.nativeElement.hasAttribute('allow-target-overlap');
  }
  @Input()
  set headerText(val: PopoverElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.getAttribute(
      'header-text'
    ) as unknown as PopoverElement['headerText'];
  }
  @Input()
  set hideArrow(val: PopoverElement['hideArrow']) {
    this.elementRef.nativeElement.hideArrow = booleanInput(val);
  }
  get hideArrow() {
    return this.elementRef.nativeElement.hasAttribute('hide-arrow');
  }
  @Input()
  set hideBackdrop(val: PopoverElement['hideBackdrop']) {
    this.elementRef.nativeElement.hideBackdrop = booleanInput(val);
  }
  get hideBackdrop() {
    return this.elementRef.nativeElement.hasAttribute('hide-backdrop');
  }
  @Input()
  set horizontalAlign(val: PopoverElement['horizontalAlign']) {
    this.elementRef.nativeElement.horizontalAlign = val;
  }
  get horizontalAlign() {
    return this.elementRef.nativeElement.getAttribute(
      'horizontal-align'
    ) as unknown as PopoverElement['horizontalAlign'];
  }
  @Input()
  set modal(val: PopoverElement['modal']) {
    this.elementRef.nativeElement.modal = booleanInput(val);
  }
  get modal() {
    return this.elementRef.nativeElement.hasAttribute('modal');
  }
  @Input()
  set opener(val: PopoverElement['opener']) {
    this.elementRef.nativeElement.opener = val;
  }
  get opener() {
    return this.elementRef.nativeElement.getAttribute(
      'opener'
    ) as unknown as PopoverElement['opener'];
  }
  @Input()
  set placementType(val: PopoverElement['placementType']) {
    this.elementRef.nativeElement.placementType = val;
  }
  get placementType() {
    return this.elementRef.nativeElement.getAttribute(
      'placement-type'
    ) as unknown as PopoverElement['placementType'];
  }
  @Input()
  set verticalAlign(val: PopoverElement['verticalAlign']) {
    this.elementRef.nativeElement.verticalAlign = val;
  }
  get verticalAlign() {
    return this.elementRef.nativeElement.getAttribute(
      'vertical-align'
    ) as unknown as PopoverElement['verticalAlign'];
  }

  @Output('after-close') afterClose: Observable<
    CustomEvent<OutputTypes['afterClose']>
  > = new PlaceholderOutput();
  @Output('after-open') afterOpen: Observable<
    CustomEvent<OutputTypes['afterOpen']>
  > = new PlaceholderOutput();
  @Output('before-close') beforeClose: Observable<
    CustomEvent<OutputTypes['beforeClose']>
  > = new PlaceholderOutput();
  @Output('before-open') beforeOpen: Observable<
    CustomEvent<OutputTypes['beforeOpen']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<PopoverElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get footer(): PopoverElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): PopoverElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
