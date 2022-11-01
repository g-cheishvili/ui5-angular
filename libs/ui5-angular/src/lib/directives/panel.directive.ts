import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Panel.js';
interface PanelElement {
  accessibleName: string;
  accessibleRole: 'Complementary' | 'Form' | 'Region';
  collapsed: BooleanInputType;
  fixed: BooleanInputType;
  headerLevel: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  headerText: string;
  noAnimation: BooleanInputType;

  // Slots
  header: Array<HTMLElement>;
}

interface OutputTypes {
  toggle: void;
}

@Directive({
  selector: 'ui5-panel',
})
export class PanelDirective {
  @Input()
  set accessibleName(val: PanelElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Input()
  set accessibleRole(val: PanelElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole() {
    return this.elementRef.nativeElement.accessibleRole;
  }
  @Input()
  set collapsed(val: PanelElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = booleanInput(val);
  }
  get collapsed() {
    return this.elementRef.nativeElement.hasAttribute('collapsed');
  }
  @Input()
  set fixed(val: PanelElement['fixed']) {
    this.elementRef.nativeElement.fixed = booleanInput(val);
  }
  get fixed() {
    return this.elementRef.nativeElement.hasAttribute('fixed');
  }
  @Input()
  set headerLevel(val: PanelElement['headerLevel']) {
    this.elementRef.nativeElement.headerLevel = val;
  }
  get headerLevel() {
    return this.elementRef.nativeElement.headerLevel;
  }
  @Input()
  set headerText(val: PanelElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.headerText;
  }
  @Input()
  set noAnimation(val: PanelElement['noAnimation']) {
    this.elementRef.nativeElement.noAnimation = booleanInput(val);
  }
  get noAnimation() {
    return this.elementRef.nativeElement.hasAttribute('no-animation');
  }

  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<PanelElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get header(): PanelElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
