import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/GroupHeaderListItem.js';
interface GroupHeaderListItemElement {
  selected: BooleanInputType;
  accessibleName: string;

  // Slots
}

@Directive({
  selector: 'ui5-li-groupheader',
})
export class GroupHeaderListItemDirective {
  @Input()
  set selected(val: GroupHeaderListItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set accessibleName(val: GroupHeaderListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as GroupHeaderListItemElement['accessibleName'];
  }

  constructor(
    private elementRef: ElementRef<GroupHeaderListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
