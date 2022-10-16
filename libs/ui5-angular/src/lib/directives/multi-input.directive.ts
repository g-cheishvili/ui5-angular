import { Directive, ElementRef, Input, Output } from '@angular/core';

import { TokenDirective } from './token.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/MultiInput.js';
interface MultiInputElement extends HTMLElement {
  showValueHelpIcon: boolean;

  // Slots
  tokens: Array<TokenDirective['element']>;
}

interface OutputTypes {
  tokenDelete: { token: HTMLElement };

  valueHelpTrigger: void;
}

@Directive({
  selector: 'ui5-multi-input',
})
export class MultiInputDirective {
  @Input()
  set showValueHelpIcon(val: MultiInputElement['showValueHelpIcon']) {
    this.elementRef.nativeElement.showValueHelpIcon = val;
  }
  get showValueHelpIcon() {
    return this.elementRef.nativeElement.hasAttribute('show-value-help-icon');
  }

  @Output('token-delete') tokenDelete: Observable<
    CustomEvent<OutputTypes['tokenDelete']>
  > = new PlaceholderOutput();
  @Output('value-help-trigger') valueHelpTrigger: Observable<
    CustomEvent<OutputTypes['valueHelpTrigger']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<MultiInputElement>) {}

  get element(): MultiInputElement {
    return this.elementRef.nativeElement;
  }

  get tokens(): MultiInputElement['tokens'] {
    return this.elementRef.nativeElement.tokens;
  }
}
