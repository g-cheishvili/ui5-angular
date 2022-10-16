import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Switch.js';
interface SwitchElement extends HTMLElement {
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  design: 'Graphical' | 'Textual';
  disabled: boolean;
  textOff: string;
  textOn: string;

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
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SwitchElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: SwitchElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as SwitchElement['accessibleNameRef'];
  }
  @Input()
  set checked(val: SwitchElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked() {
    return this.elementRef.nativeElement.hasAttribute('checked');
  }
  @Input()
  set design(val: SwitchElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as SwitchElement['design'];
  }
  @Input()
  set disabled(val: SwitchElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set textOff(val: SwitchElement['textOff']) {
    this.elementRef.nativeElement.textOff = val;
  }
  get textOff() {
    return this.elementRef.nativeElement.getAttribute(
      'text-off'
    ) as unknown as SwitchElement['textOff'];
  }
  @Input()
  set textOn(val: SwitchElement['textOn']) {
    this.elementRef.nativeElement.textOn = val;
  }
  get textOn() {
    return this.elementRef.nativeElement.getAttribute(
      'text-on'
    ) as unknown as SwitchElement['textOn'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SwitchElement>) {}

  get element(): SwitchElement {
    return this.elementRef.nativeElement;
  }
}
