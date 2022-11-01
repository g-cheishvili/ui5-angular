import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/CardHeader.js';
interface CardHeaderElement {
  interactive: BooleanInputType;
  status: string;
  subtitleText: string;
  titleText: string;

  // Slots
  action: Array<HTMLElement>;
  avatar: Array<HTMLElement>;
}

interface OutputTypes {
  click: void;
}

@Directive({
  selector: 'ui5-card-header',
})
export class CardHeaderDirective {
  @Input()
  set interactive(val: CardHeaderElement['interactive']) {
    this.elementRef.nativeElement.interactive = booleanInput(val);
  }
  get interactive() {
    return this.elementRef.nativeElement.hasAttribute('interactive');
  }
  @Input()
  set status(val: CardHeaderElement['status']) {
    this.elementRef.nativeElement.status = val;
  }
  get status() {
    return this.elementRef.nativeElement.status;
  }
  @Input()
  set subtitleText(val: CardHeaderElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.subtitleText;
  }
  @Input()
  set titleText(val: CardHeaderElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.titleText;
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<CardHeaderElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get action(): CardHeaderElement['action'] {
    return this.elementRef.nativeElement.action;
  }

  get avatar(): CardHeaderElement['avatar'] {
    return this.elementRef.nativeElement.avatar;
  }
}
