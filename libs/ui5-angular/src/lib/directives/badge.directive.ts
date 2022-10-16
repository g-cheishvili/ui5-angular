import { Directive, ElementRef, Input } from '@angular/core';

import { IconDirective } from './icon.directive';

import '@ui5/webcomponents/dist/Badge.js';
interface BadgeElement extends HTMLElement {
  colorScheme: string;

  // Slots
  icon: IconDirective['element'];
}

@Directive({
  selector: 'ui5-badge',
})
export class BadgeDirective {
  @Input()
  set colorScheme(val: BadgeElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme() {
    return this.elementRef.nativeElement.getAttribute(
      'color-scheme'
    ) as unknown as BadgeElement['colorScheme'];
  }

  constructor(private elementRef: ElementRef<BadgeElement>) {}

  get element(): BadgeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): BadgeElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }
}
