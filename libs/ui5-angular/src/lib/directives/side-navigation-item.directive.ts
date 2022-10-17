import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
interface SideNavigationItemElement extends HTMLElement {
  expanded: boolean;
  icon: string;
  selected: boolean;
  text: string;
  wholeItemToggleable: boolean;

  // Slots
}

@Directive({
  selector: 'ui5-side-navigation-item',
})
export class SideNavigationItemDirective {
  @Input()
  set expanded(val: SideNavigationItemElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded() {
    return this.elementRef.nativeElement.hasAttribute('expanded');
  }
  @Input()
  set icon(val: SideNavigationItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as SideNavigationItemElement['icon'];
  }
  @Input()
  set selected(val: SideNavigationItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: SideNavigationItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as SideNavigationItemElement['text'];
  }
  @Input()
  set wholeItemToggleable(
    val: SideNavigationItemElement['wholeItemToggleable']
  ) {
    this.elementRef.nativeElement.wholeItemToggleable = val;
  }
  get wholeItemToggleable() {
    return this.elementRef.nativeElement.hasAttribute('whole-item-toggleable');
  }

  constructor(private elementRef: ElementRef<SideNavigationItemElement>) {}

  get element(): SideNavigationItemElement {
    return this.elementRef.nativeElement;
  }
}
