import { Directive, ElementRef, Input, Output } from '@angular/core';

import { ButtonDirective } from './button.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TreeListItem.js';
interface TreeListItemElement {
  selected: BooleanInputType;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  expanded: BooleanInputType;
  icon: string;
  level: any;
  showToggleButton: BooleanInputType;

  // Slots
  deleteButton: ButtonDirective['element'];
}

interface OutputTypes {
  detailClick: void;

  stepIn: { item: HTMLElement };

  stepOut: { item: HTMLElement };

  toggle: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-li-tree',
})
export class TreeListItemDirective {
  @Input()
  set selected(val: TreeListItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set type(val: TreeListItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as TreeListItemElement['type'];
  }
  @Input()
  set accessibleName(val: TreeListItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TreeListItemElement['accessibleName'];
  }
  @Input()
  set additionalText(val: TreeListItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as TreeListItemElement['additionalText'];
  }
  @Input()
  set additionalTextState(val: TreeListItemElement['additionalTextState']) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text-state'
    ) as unknown as TreeListItemElement['additionalTextState'];
  }
  @Input()
  set expanded(val: TreeListItemElement['expanded']) {
    this.elementRef.nativeElement.expanded = booleanInput(val);
  }
  get expanded() {
    return this.elementRef.nativeElement.hasAttribute('expanded');
  }
  @Input()
  set icon(val: TreeListItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as TreeListItemElement['icon'];
  }
  @Input()
  set level(val: TreeListItemElement['level']) {
    this.elementRef.nativeElement.level = val;
  }
  get level() {
    return this.elementRef.nativeElement.getAttribute(
      'level'
    ) as unknown as TreeListItemElement['level'];
  }
  @Input()
  set showToggleButton(val: TreeListItemElement['showToggleButton']) {
    this.elementRef.nativeElement.showToggleButton = booleanInput(val);
  }
  get showToggleButton() {
    return this.elementRef.nativeElement.hasAttribute('show-toggle-button');
  }

  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  @Output('step-in') stepIn: Observable<CustomEvent<OutputTypes['stepIn']>> =
    new PlaceholderOutput();
  @Output('step-out') stepOut: Observable<CustomEvent<OutputTypes['stepOut']>> =
    new PlaceholderOutput();
  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<TreeListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): TreeListItemElement['deleteButton'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}
