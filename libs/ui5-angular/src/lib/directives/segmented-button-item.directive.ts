import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
interface SegmentedButtonItemElement {
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
  disabled: BooleanInputType;
  icon: string;
  iconEnd: BooleanInputType;
  submits: BooleanInputType;
  tooltip: string;
  pressed: BooleanInputType;

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
  set accessibilityAttributes(
    val: SegmentedButtonItemElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes() {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }
  @Input()
  set accessibleName(val: SegmentedButtonItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: SegmentedButtonItemElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set design(val: SegmentedButtonItemElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set disabled(val: SegmentedButtonItemElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: SegmentedButtonItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set iconEnd(val: SegmentedButtonItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = booleanInput(val);
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set submits(val: SegmentedButtonItemElement['submits']) {
    this.elementRef.nativeElement.submits = booleanInput(val);
  }
  get submits() {
    return this.elementRef.nativeElement.hasAttribute('submits');
  }
  @Input()
  set tooltip(val: SegmentedButtonItemElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip() {
    return this.elementRef.nativeElement.tooltip;
  }
  @Input()
  set pressed(val: SegmentedButtonItemElement['pressed']) {
    this.elementRef.nativeElement.pressed = booleanInput(val);
  }
  get pressed() {
    return this.elementRef.nativeElement.hasAttribute('pressed');
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<SegmentedButtonItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
