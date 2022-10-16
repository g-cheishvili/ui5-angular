import { Directive, ElementRef, Input, Output } from '@angular/core';

import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Token.js';
interface TokenElement extends HTMLElement {
  readonly: boolean;
  selected: boolean;
  text: string;

  // Slots
  closeIcon: IconDirective['element'];
}

interface OutputTypes {
  select: void;
}

@Directive({
  selector: 'ui5-token',
})
export class TokenDirective {
  @Input()
  set readonly(val: TokenElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set selected(val: TokenElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: TokenElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as TokenElement['text'];
  }

  @Output() select: Observable<CustomEvent<OutputTypes['select']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TokenElement>) {}

  get element(): TokenElement {
    return this.elementRef.nativeElement;
  }

  get closeIcon(): TokenElement['closeIcon'] {
    return this.elementRef.nativeElement.closeIcon;
  }
}
