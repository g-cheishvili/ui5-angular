import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/CustomListItem.js';
interface CustomListItemElement extends HTMLElement {
  accessibleName: string;

  // Slots
}

@Directive({
  selector: 'ui5-li-custom',
})
export class CustomListItemDirective {
  @Input()
  set accessibleName(val: CustomListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as CustomListItemElement['accessibleName'];
  }

  constructor(private elementRef: ElementRef<CustomListItemElement>) {}

  get element(): CustomListItemElement {
    return this.elementRef.nativeElement;
  }
}
