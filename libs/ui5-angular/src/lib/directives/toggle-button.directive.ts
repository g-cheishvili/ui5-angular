import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/ToggleButton.js';
interface ToggleButtonElement extends HTMLElement {
  pressed: boolean;
  accessibilityAttributes: Record<string, any>;
  accessibleName: string;
  accessibleNameRef: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
  icon: string;
  iconEnd: boolean;
  submits: boolean;
  tooltip: string;

  // Slots
}

interface OutputTypes {
  click: void;
}

@Directive({
  selector: 'ui5-toggle-button',
})
export class ToggleButtonDirective {
  @Input()
  set pressed(val: ToggleButtonElement['pressed']) {
    this.elementRef.nativeElement.pressed = val;
  }
  get pressed() {
    return this.elementRef.nativeElement.hasAttribute('pressed');
  }
  @Input()
  set accessibilityAttributes(
    val: ToggleButtonElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes() {
    return this.elementRef.nativeElement.getAttribute(
      'accessibility-attributes'
    ) as unknown as ToggleButtonElement['accessibilityAttributes'];
  }
  @Input()
  set accessibleName(val: ToggleButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as ToggleButtonElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: ToggleButtonElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as ToggleButtonElement['accessibleNameRef'];
  }
  @Input()
  set design(val: ToggleButtonElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as ToggleButtonElement['design'];
  }
  @Input()
  set disabled(val: ToggleButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: ToggleButtonElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as ToggleButtonElement['icon'];
  }
  @Input()
  set iconEnd(val: ToggleButtonElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set submits(val: ToggleButtonElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits() {
    return this.elementRef.nativeElement.hasAttribute('submits');
  }
  @Input()
  set tooltip(val: ToggleButtonElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip() {
    return this.elementRef.nativeElement.getAttribute(
      'tooltip'
    ) as unknown as ToggleButtonElement['tooltip'];
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ToggleButtonElement>) {}

  get element(): ToggleButtonElement {
    return this.elementRef.nativeElement;
  }
}
