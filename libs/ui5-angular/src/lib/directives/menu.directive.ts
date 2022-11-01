import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/Menu.js';
interface MenuElement {
  headerText: string;

  // Slots
}

interface OutputTypes {
  itemClick: { item: Record<string, any>; text: string };
}

@Directive({
  selector: 'ui5-menu',
})
export class MenuDirective {
  @Input()
  set headerText(val: MenuElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.headerText;
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<MenuElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
