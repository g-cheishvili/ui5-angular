import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
interface SideNavigationSubItemElement {
  icon: string;
  selected: BooleanInputType;
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
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set selected(val: SideNavigationSubItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: SideNavigationSubItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<SideNavigationSubItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
