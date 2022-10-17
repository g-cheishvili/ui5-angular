import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Title.js';
interface TitleElement {
  level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  wrappingType: 'None' | 'Normal';

  // Slots
}

@Directive({
  selector: 'ui5-title',
})
export class TitleDirective {
  @Input()
  set level(val: TitleElement['level']) {
    this.elementRef.nativeElement.level = val;
  }
  get level() {
    return this.elementRef.nativeElement.getAttribute(
      'level'
    ) as unknown as TitleElement['level'];
  }
  @Input()
  set wrappingType(val: TitleElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as TitleElement['wrappingType'];
  }

  constructor(private elementRef: ElementRef<TitleElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
