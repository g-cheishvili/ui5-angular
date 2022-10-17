import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/DynamicSideContent.js';
interface DynamicSideContentElement extends HTMLElement {
  equalSplit: boolean;
  hideMainContent: boolean;
  hideSideContent: boolean;
  sideContentFallDown: 'BelowL' | 'BelowM' | 'BelowXL' | 'OnMinimumWidth';
  sideContentPosition: 'End' | 'Start';
  sideContentVisibility:
    | 'AlwaysShow'
    | 'NeverShow'
    | 'ShowAboveL'
    | 'ShowAboveM'
    | 'ShowAboveS';

  // Slots
  sideContent: Array<HTMLElement>;
}

interface OutputTypes {
  layoutChange: {
    currentBreakpoint: string;
    previousBreakpoint: string;
    mainContentVisible: boolean;
    sideContentVisible: boolean;
  };
}

@Directive({
  selector: 'ui5-dynamic-side-content',
})
export class DynamicSideContentDirective {
  @Input()
  set equalSplit(val: DynamicSideContentElement['equalSplit']) {
    this.elementRef.nativeElement.equalSplit = val;
  }
  get equalSplit() {
    return this.elementRef.nativeElement.hasAttribute('equal-split');
  }
  @Input()
  set hideMainContent(val: DynamicSideContentElement['hideMainContent']) {
    this.elementRef.nativeElement.hideMainContent = val;
  }
  get hideMainContent() {
    return this.elementRef.nativeElement.hasAttribute('hide-main-content');
  }
  @Input()
  set hideSideContent(val: DynamicSideContentElement['hideSideContent']) {
    this.elementRef.nativeElement.hideSideContent = val;
  }
  get hideSideContent() {
    return this.elementRef.nativeElement.hasAttribute('hide-side-content');
  }
  @Input()
  set sideContentFallDown(
    val: DynamicSideContentElement['sideContentFallDown']
  ) {
    this.elementRef.nativeElement.sideContentFallDown = val;
  }
  get sideContentFallDown() {
    return this.elementRef.nativeElement.getAttribute(
      'side-content-fall-down'
    ) as unknown as DynamicSideContentElement['sideContentFallDown'];
  }
  @Input()
  set sideContentPosition(
    val: DynamicSideContentElement['sideContentPosition']
  ) {
    this.elementRef.nativeElement.sideContentPosition = val;
  }
  get sideContentPosition() {
    return this.elementRef.nativeElement.getAttribute(
      'side-content-position'
    ) as unknown as DynamicSideContentElement['sideContentPosition'];
  }
  @Input()
  set sideContentVisibility(
    val: DynamicSideContentElement['sideContentVisibility']
  ) {
    this.elementRef.nativeElement.sideContentVisibility = val;
  }
  get sideContentVisibility() {
    return this.elementRef.nativeElement.getAttribute(
      'side-content-visibility'
    ) as unknown as DynamicSideContentElement['sideContentVisibility'];
  }

  @Output('layout-change') layoutChange: Observable<
    CustomEvent<OutputTypes['layoutChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<DynamicSideContentElement>) {}

  get element(): DynamicSideContentElement {
    return this.elementRef.nativeElement;
  }

  get sideContent(): DynamicSideContentElement['sideContent'] {
    return this.elementRef.nativeElement.sideContent;
  }
}
