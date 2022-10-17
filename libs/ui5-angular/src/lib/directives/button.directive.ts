import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Button.js';
interface ButtonElement {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
    controls?: string | HTMLElement | Array<HTMLElement | string>;
  };
  accessibleName: string;
  accessibleNameRef: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: BooleanInputType;
  icon: string;
  iconEnd: BooleanInputType;
  submits: BooleanInputType;
  tooltip: string;

  // Slots
}

interface OutputTypes {
  click: void;
}

@Directive({
  selector: 'ui5-button',
})
export class ButtonDirective {
  @Input()
  set accessibilityAttributes(val: ButtonElement['accessibilityAttributes']) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes() {
    return this.elementRef.nativeElement.getAttribute(
      'accessibility-attributes'
    ) as unknown as ButtonElement['accessibilityAttributes'];
  }
  @Input()
  set accessibleName(val: ButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as ButtonElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: ButtonElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as ButtonElement['accessibleNameRef'];
  }
  @Input()
  set design(val: ButtonElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as ButtonElement['design'];
  }
  @Input()
  set disabled(val: ButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: ButtonElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as ButtonElement['icon'];
  }
  @Input()
  set iconEnd(val: ButtonElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = booleanInput(val);
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set submits(val: ButtonElement['submits']) {
    this.elementRef.nativeElement.submits = booleanInput(val);
  }
  get submits() {
    return this.elementRef.nativeElement.hasAttribute('submits');
  }
  @Input()
  set tooltip(val: ButtonElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip() {
    return this.elementRef.nativeElement.getAttribute(
      'tooltip'
    ) as unknown as ButtonElement['tooltip'];
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ButtonElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
