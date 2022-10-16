import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/TreeListItem.js';
interface TreeListItemElement extends HTMLElement {
  accessibleName: string;
  additionalText: string;
  additionalTextState: any;
  expanded: boolean;
  icon: string;
  level: number;
  showToggleButton: boolean;

  // Slots
}

interface OutputTypes {
  stepIn: { item: HTMLElement };

  stepOut: { item: HTMLElement };

  toggle: { item: HTMLElement };
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
    this.elementRef.nativeElement.expanded = val;
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
    this.elementRef.nativeElement.showToggleButton = val;
  }
  get showToggleButton() {
    return this.elementRef.nativeElement.hasAttribute('show-toggle-button');
  }

  @Output('step-in') stepIn: Observable<CustomEvent<OutputTypes['stepIn']>> =
    new PlaceholderOutput();
  @Output('step-out') stepOut: Observable<CustomEvent<OutputTypes['stepOut']>> =
    new PlaceholderOutput();
  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TreeListItemElement>) {}

  get element(): TreeListItemElement {
    return this.elementRef.nativeElement;
  }
}
