import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
interface SegmentedButtonItemElement extends HTMLElement {
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  iconEnd: boolean;
  submits: boolean;
  pressed: boolean;
  accessibilityAttributes: Record<string, any>;
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  icon: string;
  tooltip: string;

  // Slots
}

interface OutputTypes {
  click: void;
}

@Directive({
  selector: 'ui5-segmented-button-item',
})
export class SegmentedButtonItemDirective {
  @Input()
  set design(val: SegmentedButtonItemElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as SegmentedButtonItemElement['design'];
  }
  @Input()
  set iconEnd(val: SegmentedButtonItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set submits(val: SegmentedButtonItemElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits() {
    return this.elementRef.nativeElement.hasAttribute('submits');
  }
  @Input()
  set pressed(val: SegmentedButtonItemElement['pressed']) {
    this.elementRef.nativeElement.pressed = val;
  }
  get pressed() {
    return this.elementRef.nativeElement.hasAttribute('pressed');
  }
  @Input()
  set accessibilityAttributes(
    val: SegmentedButtonItemElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes() {
    return this.elementRef.nativeElement.getAttribute(
      'accessibility-attributes'
    ) as unknown as SegmentedButtonItemElement['accessibilityAttributes'];
  }
  @Input()
  set accessibleName(val: SegmentedButtonItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SegmentedButtonItemElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: SegmentedButtonItemElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as SegmentedButtonItemElement['accessibleNameRef'];
  }
  @Input()
  set disabled(val: SegmentedButtonItemElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: SegmentedButtonItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as SegmentedButtonItemElement['icon'];
  }
  @Input()
  set tooltip(val: SegmentedButtonItemElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip() {
    return this.elementRef.nativeElement.getAttribute(
      'tooltip'
    ) as unknown as SegmentedButtonItemElement['tooltip'];
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SegmentedButtonItemElement>) {}

  get element(): SegmentedButtonItemElement {
    return this.elementRef.nativeElement;
  }
}
