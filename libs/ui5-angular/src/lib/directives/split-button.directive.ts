import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/SplitButton.js';
interface SplitButtonElement extends HTMLElement {
  accessibleName: string;
  activeIcon: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
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
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SplitButtonElement['accessibleName'];
  }
  @Input()
  set activeIcon(val: SplitButtonElement['activeIcon']) {
    this.elementRef.nativeElement.activeIcon = val;
  }
  get activeIcon() {
    return this.elementRef.nativeElement.getAttribute(
      'active-icon'
    ) as unknown as SplitButtonElement['activeIcon'];
  }
  @Input()
  set design(val: SplitButtonElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as SplitButtonElement['design'];
  }
  @Input()
  set disabled(val: SplitButtonElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: SplitButtonElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as SplitButtonElement['icon'];
  }

  @Output('arrow-click') arrowClick: Observable<
    CustomEvent<OutputTypes['arrowClick']>
  > = new PlaceholderOutput();
  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SplitButtonElement>) {}

  get element(): SplitButtonElement {
    return this.elementRef.nativeElement;
  }
}
