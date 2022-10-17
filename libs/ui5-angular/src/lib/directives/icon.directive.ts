import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Icon.js';
interface IconElement {
  accessibleName: string;
  accessibleRole: string;
  interactive: BooleanInputType;
  name: string;
  showTooltip: BooleanInputType;

  // Slots
}

@Directive({
  selector: 'ui5-icon',
})
export class IconDirective {
  @Input()
  set accessibleName(val: IconElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as IconElement['accessibleName'];
  }
  @Input()
  set accessibleRole(val: IconElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-role'
    ) as unknown as IconElement['accessibleRole'];
  }
  @Input()
  set interactive(val: IconElement['interactive']) {
    this.elementRef.nativeElement.interactive = booleanInput(val);
  }
  get interactive() {
    return this.elementRef.nativeElement.hasAttribute('interactive');
  }
  @Input()
  set name(val: IconElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as IconElement['name'];
  }
  @Input()
  set showTooltip(val: IconElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = booleanInput(val);
  }
  get showTooltip() {
    return this.elementRef.nativeElement.hasAttribute('show-tooltip');
  }

  constructor(private elementRef: ElementRef<IconElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
