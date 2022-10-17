import { Directive, ElementRef, Input, Output } from '@angular/core';

import { ButtonDirective } from './button.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TabContainer.js';
interface TabContainerElement {
  allItems: any;
  collapsed: BooleanInputType;
  fixed: BooleanInputType;
  showOverflow: BooleanInputType;
  tabLayout: 'Inline' | 'Standard';
  tabsOverflowMode: 'End' | 'StartAndEnd';

  // Slots
  overflowButton: ButtonDirective['element'];
  startOverflowButton: ButtonDirective['element'];
}

interface OutputTypes {
  tabSelect: { tab: HTMLElement; tabIndex: number };
}

@Directive({
  selector: 'ui5-tabcontainer',
})
export class TabContainerDirective {
  @Input()
  set allItems(val: TabContainerElement['allItems']) {
    this.elementRef.nativeElement.allItems = val;
  }
  get allItems() {
    return this.elementRef.nativeElement.getAttribute(
      'all-items'
    ) as unknown as TabContainerElement['allItems'];
  }
  @Input()
  set collapsed(val: TabContainerElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = booleanInput(val);
  }
  get collapsed() {
    return this.elementRef.nativeElement.hasAttribute('collapsed');
  }
  @Input()
  set fixed(val: TabContainerElement['fixed']) {
    this.elementRef.nativeElement.fixed = booleanInput(val);
  }
  get fixed() {
    return this.elementRef.nativeElement.hasAttribute('fixed');
  }
  @Input()
  set showOverflow(val: TabContainerElement['showOverflow']) {
    this.elementRef.nativeElement.showOverflow = booleanInput(val);
  }
  get showOverflow() {
    return this.elementRef.nativeElement.hasAttribute('show-overflow');
  }
  @Input()
  set tabLayout(val: TabContainerElement['tabLayout']) {
    this.elementRef.nativeElement.tabLayout = val;
  }
  get tabLayout() {
    return this.elementRef.nativeElement.getAttribute(
      'tab-layout'
    ) as unknown as TabContainerElement['tabLayout'];
  }
  @Input()
  set tabsOverflowMode(val: TabContainerElement['tabsOverflowMode']) {
    this.elementRef.nativeElement.tabsOverflowMode = val;
  }
  get tabsOverflowMode() {
    return this.elementRef.nativeElement.getAttribute(
      'tabs-overflow-mode'
    ) as unknown as TabContainerElement['tabsOverflowMode'];
  }

  @Output('tab-select') tabSelect: Observable<
    CustomEvent<OutputTypes['tabSelect']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<TabContainerElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get overflowButton(): TabContainerElement['overflowButton'] {
    return this.elementRef.nativeElement.overflowButton;
  }

  get startOverflowButton(): TabContainerElement['startOverflowButton'] {
    return this.elementRef.nativeElement.startOverflowButton;
  }
}
