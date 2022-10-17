import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/GroupHeaderListItem.js';
interface GroupHeaderListItemElement {
  accessibleName: string;
  selected: BooleanInputType;

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
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  constructor(
    private elementRef: ElementRef<GroupHeaderListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
