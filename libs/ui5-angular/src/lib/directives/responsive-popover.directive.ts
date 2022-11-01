import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/ResponsivePopover.js';
interface ResponsivePopoverElement {
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
  selector: 'ui5-responsive-popover',
})
export class ResponsivePopoverDirective {
  @Input()
  set accessibleName(val: ResponsivePopoverElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: ResponsivePopoverElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set initialFocus(val: ResponsivePopoverElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus() {
    return this.elementRef.nativeElement.initialFocus;
  }
  @Input()
  set open(val: ResponsivePopoverElement['open']) {
    this.elementRef.nativeElement.open = booleanInput(val);
  }
  get open() {
    return this.elementRef.nativeElement.hasAttribute('open');
  }
  @Input()
  set preventFocusRestore(
    val: ResponsivePopoverElement['preventFocusRestore']
  ) {
    this.elementRef.nativeElement.preventFocusRestore = booleanInput(val);
  }
  get preventFocusRestore() {
    return this.elementRef.nativeElement.hasAttribute('prevent-focus-restore');
  }
  @Input()
  set allowTargetOverlap(val: ResponsivePopoverElement['allowTargetOverlap']) {
    this.elementRef.nativeElement.allowTargetOverlap = booleanInput(val);
  }
  get allowTargetOverlap() {
    return this.elementRef.nativeElement.hasAttribute('allow-target-overlap');
  }
  @Input()
  set headerText(val: ResponsivePopoverElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.headerText;
  }
  @Input()
  set hideArrow(val: ResponsivePopoverElement['hideArrow']) {
    this.elementRef.nativeElement.hideArrow = booleanInput(val);
  }
  get hideArrow() {
    return this.elementRef.nativeElement.hasAttribute('hide-arrow');
  }
  @Input()
  set hideBackdrop(val: ResponsivePopoverElement['hideBackdrop']) {
    this.elementRef.nativeElement.hideBackdrop = booleanInput(val);
  }
  get hideBackdrop() {
    return this.elementRef.nativeElement.hasAttribute('hide-backdrop');
  }
  @Input()
  set horizontalAlign(val: ResponsivePopoverElement['horizontalAlign']) {
    this.elementRef.nativeElement.horizontalAlign = val;
  }
  get horizontalAlign() {
    return this.elementRef.nativeElement.horizontalAlign;
  }
  @Input()
  set modal(val: ResponsivePopoverElement['modal']) {
    this.elementRef.nativeElement.modal = booleanInput(val);
  }
  get modal() {
    return this.elementRef.nativeElement.hasAttribute('modal');
  }
  @Input()
  set opener(val: ResponsivePopoverElement['opener']) {
    this.elementRef.nativeElement.opener = val;
  }
  get opener() {
    return this.elementRef.nativeElement.opener;
  }
  @Input()
  set placementType(val: ResponsivePopoverElement['placementType']) {
    this.elementRef.nativeElement.placementType = val;
  }
  get placementType() {
    return this.elementRef.nativeElement.placementType;
  }
  @Input()
  set verticalAlign(val: ResponsivePopoverElement['verticalAlign']) {
    this.elementRef.nativeElement.verticalAlign = val;
  }
  get verticalAlign() {
    return this.elementRef.nativeElement.verticalAlign;
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
  constructor(
    private elementRef: ElementRef<ResponsivePopoverElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get footer(): ResponsivePopoverElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): ResponsivePopoverElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
