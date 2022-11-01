import { Directive, ElementRef, Input, Output } from '@angular/core';

import { ButtonDirective } from './button.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/CustomListItem.js';
interface CustomListItemElement {
  selected: BooleanInputType;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;

  // Slots
  deleteButton: ButtonDirective['element'];
}

interface OutputTypes {
  detailClick: void;
}

@Directive({
  selector: 'ui5-li-custom',
})
export class CustomListItemDirective {
  @Input()
  set selected(val: CustomListItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set type(val: CustomListItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.type;
  }
  @Input()
  set accessibleName(val: CustomListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<CustomListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): CustomListItemElement['deleteButton'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}
