import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/CustomListItem.js';
interface CustomListItemElement extends HTMLElement {
  accessibleName: string;
  type: 'Active' | 'Detail' | 'Inactive';
  selected: boolean;

  // Slots
}

interface OutputTypes {
  detailClick: void;
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
  @Input()
  set type(val: CustomListItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as CustomListItemElement['type'];
  }
  @Input()
  set selected(val: CustomListItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<CustomListItemElement>) {}

  get element(): CustomListItemElement {
    return this.elementRef.nativeElement;
  }
}
