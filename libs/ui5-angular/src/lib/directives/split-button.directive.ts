import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/SplitButton.js';
interface SplitButtonElement {
  accessibleName: string;
  activeIcon: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: BooleanInputType;
  icon: string;

  // Slots
}

interface OutputTypes {
  arrowClick: void;

  click: void;
}

@Directive({
  selector: 'ui5-split-button',
})
export class SplitButtonDirective {
  @Input()
  set accessibleName(val: SplitButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set activeIcon(val: SplitButtonElement['activeIcon']) {
    this.elementRef.nativeElement.activeIcon = val;
  }
  get activeIcon() {
    return this.elementRef.nativeElement.activeIcon;
  }
  @Input()
  set design(val: SplitButtonElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set disabled(val: SplitButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: SplitButtonElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }

  @Output('arrow-click') arrowClick: Observable<
    CustomEvent<OutputTypes['arrowClick']>
  > = new PlaceholderOutput();
  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<SplitButtonElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
