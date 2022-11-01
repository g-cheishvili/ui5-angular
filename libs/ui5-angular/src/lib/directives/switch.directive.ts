import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Switch.js';
interface SwitchElement {
  accessibleName: string;
  accessibleNameRef: string;
  checked: BooleanInputType;
  design: 'Graphical' | 'Textual';
  disabled: BooleanInputType;
  textOff: string;
  textOn: string;
  tooltip: string;

  // Slots
}

interface OutputTypes {
  change: void;
}

@Directive({
  selector: 'ui5-switch',
})
export class SwitchDirective {
  @Input()
  set accessibleName(val: SwitchElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleNameRef(val: SwitchElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set checked(val: SwitchElement['checked']) {
    this.elementRef.nativeElement.checked = booleanInput(val);
  }
  get checked() {
    return this.elementRef.nativeElement.hasAttribute('checked');
  }
  @Input()
  set design(val: SwitchElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set disabled(val: SwitchElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set textOff(val: SwitchElement['textOff']) {
    this.elementRef.nativeElement.textOff = val;
  }
  get textOff() {
    return this.elementRef.nativeElement.textOff;
  }
  @Input()
  set textOn(val: SwitchElement['textOn']) {
    this.elementRef.nativeElement.textOn = val;
  }
  get textOn() {
    return this.elementRef.nativeElement.textOn;
  }
  @Input()
  set tooltip(val: SwitchElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip() {
    return this.elementRef.nativeElement.tooltip;
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SwitchElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
