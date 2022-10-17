import { Directive, ElementRef, Input, Output } from '@angular/core';

import { IconDirective } from './icon.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/MessageStrip.js';
interface MessageStripElement {
  design: 'Information' | 'Negative' | 'Positive' | 'Warning';
  hideCloseButton: BooleanInputType;
  hideIcon: BooleanInputType;

  // Slots
  icon: IconDirective['element'];
}

interface OutputTypes {
  close: void;
}

@Directive({
  selector: 'ui5-message-strip',
})
export class MessageStripDirective {
  @Input()
  set design(val: MessageStripElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as MessageStripElement['design'];
  }
  @Input()
  set hideCloseButton(val: MessageStripElement['hideCloseButton']) {
    this.elementRef.nativeElement.hideCloseButton = booleanInput(val);
  }
  get hideCloseButton() {
    return this.elementRef.nativeElement.hasAttribute('hide-close-button');
  }
  @Input()
  set hideIcon(val: MessageStripElement['hideIcon']) {
    this.elementRef.nativeElement.hideIcon = booleanInput(val);
  }
  get hideIcon() {
    return this.elementRef.nativeElement.hasAttribute('hide-icon');
  }

  @Output() close: Observable<CustomEvent<OutputTypes['close']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<MessageStripElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get icon(): MessageStripElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }
}
