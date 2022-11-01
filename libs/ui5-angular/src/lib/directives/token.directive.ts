import { Directive, ElementRef, Input, Output } from '@angular/core';

import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Token.js';
interface TokenElement {
  readonly: BooleanInputType;
  selected: BooleanInputType;
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
    this.elementRef.nativeElement.readonly = booleanInput(val);
  }
  get readonly() {
    return this.elementRef.nativeElement.hasAttribute('readonly');
  }
  @Input()
  set selected(val: TokenElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: TokenElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }

  @Output() select: Observable<CustomEvent<OutputTypes['select']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TokenElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get closeIcon(): TokenElement['closeIcon'] {
    return this.elementRef.nativeElement.closeIcon;
  }
}
