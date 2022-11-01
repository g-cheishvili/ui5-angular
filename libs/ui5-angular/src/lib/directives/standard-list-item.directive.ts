import { Directive, ElementRef, Input, Output } from '@angular/core';

import { ButtonDirective } from './button.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/StandardListItem.js';
interface StandardListItemElement {
  selected: BooleanInputType;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  description: string;
  icon: string;
  iconEnd: BooleanInputType;
  image: string;

  // Slots
  deleteButton: ButtonDirective['element'];
}

interface OutputTypes {
  detailClick: void;
}

@Directive({
  selector: 'ui5-li',
})
export class StandardListItemDirective {
  @Input()
  set selected(val: StandardListItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set type(val: StandardListItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.type;
  }
  @Input()
  set accessibleName(val: StandardListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set additionalText(val: StandardListItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.additionalText;
  }
  @Input()
  set additionalTextState(val: StandardListItemElement['additionalTextState']) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState() {
    return this.elementRef.nativeElement.additionalTextState;
  }
  @Input()
  set description(val: StandardListItemElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description() {
    return this.elementRef.nativeElement.description;
  }
  @Input()
  set icon(val: StandardListItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set iconEnd(val: StandardListItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = booleanInput(val);
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set image(val: StandardListItemElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image() {
    return this.elementRef.nativeElement.image;
  }

  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<StandardListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): StandardListItemElement['deleteButton'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}
