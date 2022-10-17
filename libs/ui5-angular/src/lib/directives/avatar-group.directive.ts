import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/AvatarGroup.js';
interface AvatarGroupElement {
  colorScheme: Array<
    | 'Accent1'
    | 'Accent10'
    | 'Accent2'
    | 'Accent3'
    | 'Accent4'
    | 'Accent5'
    | 'Accent6'
    | 'Accent7'
    | 'Accent8'
    | 'Accent9'
    | 'Placeholder'
  >;
  hiddenItems: Array<HTMLElement>;
  type: 'Group' | 'Individual';

  // Slots
  overflowButton: HTMLElement;
}

interface OutputTypes {
  click: { targetRef: HTMLElement; overflowButtonClicked: boolean };

  overflow: void;
}

@Directive({
  selector: 'ui5-avatar-group',
})
export class AvatarGroupDirective {
  @Input()
  set colorScheme(val: AvatarGroupElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme() {
    return this.elementRef.nativeElement.getAttribute(
      'color-scheme'
    ) as unknown as AvatarGroupElement['colorScheme'];
  }
  @Input()
  set hiddenItems(val: AvatarGroupElement['hiddenItems']) {
    this.elementRef.nativeElement.hiddenItems = val;
  }
  get hiddenItems() {
    return this.elementRef.nativeElement.getAttribute(
      'hidden-items'
    ) as unknown as AvatarGroupElement['hiddenItems'];
  }
  @Input()
  set type(val: AvatarGroupElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as AvatarGroupElement['type'];
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  @Output() overflow: Observable<CustomEvent<OutputTypes['overflow']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<AvatarGroupElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get overflowButton(): AvatarGroupElement['overflowButton'] {
    return this.elementRef.nativeElement.overflowButton;
  }
}
