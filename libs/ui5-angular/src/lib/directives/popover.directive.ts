import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Popover.js';
interface PopoverElement extends HTMLElement {
  allowTargetOverlap: boolean;
  headerText: string;
  hideArrow: boolean;
  hideBackdrop: boolean;
  horizontalAlign: 'Center' | 'Left' | 'Right' | 'Stretch';
  modal: boolean;
  opener: any;
  placementType: 'Bottom' | 'Left' | 'Right' | 'Top';
  verticalAlign: 'Bottom' | 'Center' | 'Stretch' | 'Top';

  // Slots
  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-popover',
})
export class PopoverDirective {
  @Input()
  set allowTargetOverlap(val: PopoverElement['allowTargetOverlap']) {
    this.elementRef.nativeElement.allowTargetOverlap = val;
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
    this.elementRef.nativeElement.hideArrow = val;
  }
  get hideArrow() {
    return this.elementRef.nativeElement.hasAttribute('hide-arrow');
  }
  @Input()
  set hideBackdrop(val: PopoverElement['hideBackdrop']) {
    this.elementRef.nativeElement.hideBackdrop = val;
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
    this.elementRef.nativeElement.modal = val;
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

  constructor(private elementRef: ElementRef<PopoverElement>) {}

  get element(): PopoverElement {
    return this.elementRef.nativeElement;
  }

  get footer(): PopoverElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): PopoverElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
