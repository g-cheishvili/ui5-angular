import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
interface ShellBarItemElement {
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
    return this.elementRef.nativeElement.count;
  }
  @Input()
  set icon(val: ShellBarItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set text(val: ShellBarItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<ShellBarItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
