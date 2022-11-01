import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/TreeItem.js';
interface TreeItemElement {
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  expanded: BooleanInputType;
  hasChildren: BooleanInputType;
  icon: string;
  indeterminate: BooleanInputType;
  selected: BooleanInputType;
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-tree-item',
})
export class TreeItemDirective {
  @Input()
  set accessibleName(val: TreeItemElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as TreeItemElement['accessibleName'];
  }
  @Input()
  set additionalText(val: TreeItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as TreeItemElement['additionalText'];
  }
  @Input()
  set additionalTextState(val: TreeItemElement['additionalTextState']) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text-state'
    ) as unknown as TreeItemElement['additionalTextState'];
  }
  @Input()
  set expanded(val: TreeItemElement['expanded']) {
    this.elementRef.nativeElement.expanded = booleanInput(val);
  }
  get expanded() {
    return this.elementRef.nativeElement.hasAttribute('expanded');
  }
  @Input()
  set hasChildren(val: TreeItemElement['hasChildren']) {
    this.elementRef.nativeElement.hasChildren = booleanInput(val);
  }
  get hasChildren() {
    return this.elementRef.nativeElement.hasAttribute('has-children');
  }
  @Input()
  set icon(val: TreeItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as TreeItemElement['icon'];
  }
  @Input()
  set indeterminate(val: TreeItemElement['indeterminate']) {
    this.elementRef.nativeElement.indeterminate = booleanInput(val);
  }
  get indeterminate() {
    return this.elementRef.nativeElement.hasAttribute('indeterminate');
  }
  @Input()
  set selected(val: TreeItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: TreeItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as TreeItemElement['text'];
  }

  constructor(private elementRef: ElementRef<TreeItemElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
