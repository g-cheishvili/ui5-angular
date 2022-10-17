import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/GroupHeaderListItem.js';
interface GroupHeaderListItemElement extends HTMLElement {
  accessibleName: string;
  selected: boolean;

  // Slots
}

@Directive({
  selector: 'ui5-li-groupheader',
})
export class GroupHeaderListItemDirective {
  @Input()
  set accessibleName(val: GroupHeaderListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as GroupHeaderListItemElement['accessibleName'];
  }
  @Input()
  set selected(val: GroupHeaderListItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  constructor(private elementRef: ElementRef<GroupHeaderListItemElement>) {}

  get element(): GroupHeaderListItemElement {
    return this.elementRef.nativeElement;
  }
}
