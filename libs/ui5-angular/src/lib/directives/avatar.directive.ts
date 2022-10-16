import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Avatar.js';
interface AvatarElement extends HTMLElement {
  accessibleName: string;
  colorScheme:
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
    | 'Placeholder';
  icon: string;
  initials: string;
  interactive: boolean;
  shape: 'Circle' | 'Square';
  size: 'L' | 'M' | 'S' | 'XL' | 'XS';

  // Slots
  badge: HTMLElement;
}

@Directive({
  selector: 'ui5-avatar',
})
export class AvatarDirective {
  @Input()
  set accessibleName(val: AvatarElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as AvatarElement['accessibleName'];
  }
  @Input()
  set colorScheme(val: AvatarElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme() {
    return this.elementRef.nativeElement.getAttribute(
      'color-scheme'
    ) as unknown as AvatarElement['colorScheme'];
  }
  @Input()
  set icon(val: AvatarElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as AvatarElement['icon'];
  }
  @Input()
  set initials(val: AvatarElement['initials']) {
    this.elementRef.nativeElement.initials = val;
  }
  get initials() {
    return this.elementRef.nativeElement.getAttribute(
      'initials'
    ) as unknown as AvatarElement['initials'];
  }
  @Input()
  set interactive(val: AvatarElement['interactive']) {
    this.elementRef.nativeElement.interactive = val;
  }
  get interactive() {
    return this.elementRef.nativeElement.hasAttribute('interactive');
  }
  @Input()
  set shape(val: AvatarElement['shape']) {
    this.elementRef.nativeElement.shape = val;
  }
  get shape() {
    return this.elementRef.nativeElement.getAttribute(
      'shape'
    ) as unknown as AvatarElement['shape'];
  }
  @Input()
  set size(val: AvatarElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size() {
    return this.elementRef.nativeElement.getAttribute(
      'size'
    ) as unknown as AvatarElement['size'];
  }

  constructor(private elementRef: ElementRef<AvatarElement>) {}

  get element(): AvatarElement {
    return this.elementRef.nativeElement;
  }

  get badge(): AvatarElement['badge'] {
    return this.elementRef.nativeElement.badge;
  }
}
