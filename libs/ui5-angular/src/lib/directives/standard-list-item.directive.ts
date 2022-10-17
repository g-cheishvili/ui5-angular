import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/StandardListItem.js';
interface StandardListItemElement extends HTMLElement {
  accessibleName: string;
  additionalText: string;
  additionalTextState: any;
  description: string;
  icon: string;
  iconEnd: boolean;
  image: string;
  type: 'Active' | 'Detail' | 'Inactive';
  selected: boolean;

  // Slots
}

interface OutputTypes {
  detailClick: void;
}

@Directive({
  selector: 'ui5-li',
})
export class StandardListItemDirective {
  @Input()
  set accessibleName(val: StandardListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as StandardListItemElement['accessibleName'];
  }
  @Input()
  set additionalText(val: StandardListItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as StandardListItemElement['additionalText'];
  }
  @Input()
  set additionalTextState(val: StandardListItemElement['additionalTextState']) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text-state'
    ) as unknown as StandardListItemElement['additionalTextState'];
  }
  @Input()
  set description(val: StandardListItemElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description() {
    return this.elementRef.nativeElement.getAttribute(
      'description'
    ) as unknown as StandardListItemElement['description'];
  }
  @Input()
  set icon(val: StandardListItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as StandardListItemElement['icon'];
  }
  @Input()
  set iconEnd(val: StandardListItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set image(val: StandardListItemElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image() {
    return this.elementRef.nativeElement.getAttribute(
      'image'
    ) as unknown as StandardListItemElement['image'];
  }
  @Input()
  set type(val: StandardListItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as StandardListItemElement['type'];
  }
  @Input()
  set selected(val: StandardListItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<StandardListItemElement>) {}

  get element(): StandardListItemElement {
    return this.elementRef.nativeElement;
  }
}
