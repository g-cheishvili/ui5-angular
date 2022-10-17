import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
interface ShellBarItemElement extends HTMLElement {
  count: string;
  icon: string;
  text: string;

  // Slots
}

interface OutputTypes {
  click: { targetRef: HTMLElement };
}

@Directive({
  selector: 'ui5-shellbar-item',
})
export class ShellBarItemDirective {
  @Input()
  set count(val: ShellBarItemElement['count']) {
    this.elementRef.nativeElement.count = val;
  }
  get count() {
    return this.elementRef.nativeElement.getAttribute(
      'count'
    ) as unknown as ShellBarItemElement['count'];
  }
  @Input()
  set icon(val: ShellBarItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as ShellBarItemElement['icon'];
  }
  @Input()
  set text(val: ShellBarItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as ShellBarItemElement['text'];
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ShellBarItemElement>) {}

  get element(): ShellBarItemElement {
    return this.elementRef.nativeElement;
  }
}
