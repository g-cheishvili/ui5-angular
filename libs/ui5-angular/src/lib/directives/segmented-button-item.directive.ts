import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
interface SegmentedButtonItemElement extends HTMLElement {
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  iconEnd: boolean;
  submits: boolean;

  // Slots
}

@Directive({
  selector: 'ui5-segmented-button-item',
})
export class SegmentedButtonItemDirective {
  @Input()
  set design(val: SegmentedButtonItemElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as SegmentedButtonItemElement['design'];
  }
  @Input()
  set iconEnd(val: SegmentedButtonItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set submits(val: SegmentedButtonItemElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits() {
    return this.elementRef.nativeElement.hasAttribute('submits');
  }

  constructor(private elementRef: ElementRef<SegmentedButtonItemElement>) {}

  get element(): SegmentedButtonItemElement {
    return this.elementRef.nativeElement;
  }
}
