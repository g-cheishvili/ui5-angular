import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/ToggleButton.js';
interface ToggleButtonElement extends HTMLElement {
  pressed: boolean;

  // Slots
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

  constructor(private elementRef: ElementRef<ToggleButtonElement>) {}

  get element(): ToggleButtonElement {
    return this.elementRef.nativeElement;
  }
}
