import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/Bar.js';
interface BarElement extends HTMLElement {
  design: 'FloatingFooter' | 'Footer' | 'Header' | 'Subheader';

  // Slots
  endContent: Array<HTMLElement>;
  startContent: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-bar',
})
export class BarDirective {
  @Input()
  set design(val: BarElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as BarElement['design'];
  }

  constructor(private elementRef: ElementRef<BarElement>) {}

  get element(): BarElement {
    return this.elementRef.nativeElement;
  }

  get endContent(): BarElement['endContent'] {
    return this.elementRef.nativeElement.endContent;
  }

  get startContent(): BarElement['startContent'] {
    return this.elementRef.nativeElement.startContent;
  }
}
