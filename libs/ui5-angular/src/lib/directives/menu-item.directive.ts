import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/MenuItem.js';
interface MenuItemElement {
  accessibleName: string;
  additionalText: string;
  disabled: BooleanInputType;
  icon: string;
  startsSection: BooleanInputType;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-menu-item',
})
export class MenuItemDirective {
  @Input()
  set accessibleName(val: MenuItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as MenuItemElement['accessibleName'];
  }
  @Input()
  set additionalText(val: MenuItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as MenuItemElement['additionalText'];
  }
  @Input()
  set disabled(val: MenuItemElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: MenuItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as MenuItemElement['icon'];
  }
  @Input()
  set startsSection(val: MenuItemElement['startsSection']) {
    this.elementRef.nativeElement.startsSection = booleanInput(val);
  }
  get startsSection() {
    return this.elementRef.nativeElement.hasAttribute('starts-section');
  }
  @Input()
  set text(val: MenuItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as MenuItemElement['text'];
  }

  constructor(private elementRef: ElementRef<MenuItemElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
