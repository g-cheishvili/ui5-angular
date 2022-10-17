import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TreeListItem.js';
interface TreeListItemElement {
  accessibleName: string;
  additionalText: string;
  additionalTextState: any;
  expanded: BooleanInputType;
  icon: string;
  level: number;
  showToggleButton: BooleanInputType;
  type: 'Active' | 'Detail' | 'Inactive';
  selected: BooleanInputType;

  // Slots
}

interface OutputTypes {
  stepIn: { item: HTMLElement };

  stepOut: { item: HTMLElement };

  toggle: { item: HTMLElement };

  detailClick: void;
}

@Directive({
  selector: 'ui5-li-tree',
})
export class TreeListItemDirective {
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
  set selected(val: TreeListItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  @Output('step-in') stepIn: Observable<CustomEvent<OutputTypes['stepIn']>> =
    new PlaceholderOutput();
  @Output('step-out') stepOut: Observable<CustomEvent<OutputTypes['stepOut']>> =
    new PlaceholderOutput();
  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  @Output('detail-click') detailClick: Observable<
    CustomEvent<OutputTypes['detailClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<TreeListItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
