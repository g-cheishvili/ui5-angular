import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Panel.js';
interface PanelElement extends HTMLElement {
  accessibleName: string;
  accessibleRole: 'Complementary' | 'Form' | 'Region';
  collapsed: boolean;
  fixed: boolean;
  headerLevel: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  headerText: string;
  noAnimation: boolean;

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
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as PanelElement['accessibleName'];
  }
  @Input()
  set accessibleRole(val: PanelElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-role'
    ) as unknown as PanelElement['accessibleRole'];
  }
  @Input()
  set collapsed(val: PanelElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed() {
    return this.elementRef.nativeElement.hasAttribute('collapsed');
  }
  @Input()
  set fixed(val: PanelElement['fixed']) {
    this.elementRef.nativeElement.fixed = val;
  }
  get fixed() {
    return this.elementRef.nativeElement.hasAttribute('fixed');
  }
  @Input()
  set headerLevel(val: PanelElement['headerLevel']) {
    this.elementRef.nativeElement.headerLevel = val;
  }
  get headerLevel() {
    return this.elementRef.nativeElement.getAttribute(
      'header-level'
    ) as unknown as PanelElement['headerLevel'];
  }
  @Input()
  set headerText(val: PanelElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.getAttribute(
      'header-text'
    ) as unknown as PanelElement['headerText'];
  }
  @Input()
  set noAnimation(val: PanelElement['noAnimation']) {
    this.elementRef.nativeElement.noAnimation = val;
  }
  get noAnimation() {
    return this.elementRef.nativeElement.hasAttribute('no-animation');
  }

  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<PanelElement>) {}

  get element(): PanelElement {
    return this.elementRef.nativeElement;
  }

  get header(): PanelElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
