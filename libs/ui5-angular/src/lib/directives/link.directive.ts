import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Link.js';
interface LinkElement {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
  };
  accessibleName: string;
  accessibleNameRef: string;
  accessibleRole: string;
  design: 'Default' | 'Emphasized' | 'Subtle';
  disabled: BooleanInputType;
  href: string;
  target: string;
  wrappingType: 'None' | 'Normal';

  // Slots
}

interface OutputTypes {
  click: {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
  };
}

@Directive({
  selector: 'ui5-link',
})
export class LinkDirective {
  @Input()
  set accessibilityAttributes(val: LinkElement['accessibilityAttributes']) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes() {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }
  @Input()
  set accessibleName(val: LinkElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: LinkElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set accessibleRole(val: LinkElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole() {
    return this.elementRef.nativeElement.accessibleRole;
  }
  @Input()
  set design(val: LinkElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set disabled(val: LinkElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set href(val: LinkElement['href']) {
    this.elementRef.nativeElement.href = val;
  }
  get href() {
    return this.elementRef.nativeElement.href;
  }
  @Input()
  set target(val: LinkElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target() {
    return this.elementRef.nativeElement.target;
  }
  @Input()
  set wrappingType(val: LinkElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.wrappingType;
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<LinkElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
