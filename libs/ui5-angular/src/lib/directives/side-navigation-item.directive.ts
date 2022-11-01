import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
interface SideNavigationItemElement {
  expanded: BooleanInputType;
  icon: string;
  selected: BooleanInputType;
  text: string;
  wholeItemToggleable: BooleanInputType;

  // Slots
}

@Directive({
  selector: 'ui5-side-navigation-item',
})
export class SideNavigationItemDirective {
  @Input()
  set expanded(val: SideNavigationItemElement['expanded']) {
    this.elementRef.nativeElement.expanded = booleanInput(val);
  }
  get expanded() {
    return this.elementRef.nativeElement.hasAttribute('expanded');
  }
  @Input()
  set icon(val: SideNavigationItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set selected(val: SideNavigationItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: SideNavigationItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }
  @Input()
  set wholeItemToggleable(
    val: SideNavigationItemElement['wholeItemToggleable']
  ) {
    this.elementRef.nativeElement.wholeItemToggleable = booleanInput(val);
  }
  get wholeItemToggleable() {
    return this.elementRef.nativeElement.hasAttribute('whole-item-toggleable');
  }

  constructor(
    private elementRef: ElementRef<SideNavigationItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
