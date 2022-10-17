import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
interface SideNavigationSubItemElement extends HTMLElement {
  icon: string;
  selected: boolean;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-side-navigation-sub-item',
})
export class SideNavigationSubItemDirective {
  @Input()
  set icon(val: SideNavigationSubItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as SideNavigationSubItemElement['icon'];
  }
  @Input()
  set selected(val: SideNavigationSubItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: SideNavigationSubItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as SideNavigationSubItemElement['text'];
  }

  constructor(private elementRef: ElementRef<SideNavigationSubItemElement>) {}

  get element(): SideNavigationSubItemElement {
    return this.elementRef.nativeElement;
  }
}
