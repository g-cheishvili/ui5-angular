import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
interface FlexibleColumnLayoutElement {
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  columnLayout: Array<any>;
  endColumnVisible: BooleanInputType;
  hideArrows: BooleanInputType;
  layout:
    | 'EndColumnFullScreen'
    | 'MidColumnFullScreen'
    | 'OneColumn'
    | 'ThreeColumnsEndExpanded'
    | 'ThreeColumnsMidExpanded'
    | 'ThreeColumnsMidExpandedEndHidden'
    | 'ThreeColumnsStartExpandedEndHidden'
    | 'TwoColumnsMidExpanded'
    | 'TwoColumnsStartExpanded';
  midColumnVisible: BooleanInputType;
  startColumnVisible: BooleanInputType;
  visibleColumns: any;

  // Slots
  endColumn: HTMLElement;
  midColumn: HTMLElement;
  startColumn: HTMLElement;
}

interface OutputTypes {
  layoutChange: {
    layout:
      | 'EndColumnFullScreen'
      | 'MidColumnFullScreen'
      | 'OneColumn'
      | 'ThreeColumnsEndExpanded'
      | 'ThreeColumnsMidExpanded'
      | 'ThreeColumnsMidExpandedEndHidden'
      | 'ThreeColumnsStartExpandedEndHidden'
      | 'TwoColumnsMidExpanded'
      | 'TwoColumnsStartExpanded';
    columnLayout: Array<any>;
    startColumnVisible: boolean;
    midColumnVisible: boolean;
    endColumnVisible: boolean;
    arrowsUsed: boolean;
    resize: boolean;
  };
}

@Directive({
  selector: 'ui5-flexible-column-layout',
})
export class FlexibleColumnLayoutDirective {
  @Input()
  set accessibilityRoles(
    val: FlexibleColumnLayoutElement['accessibilityRoles']
  ) {
    this.elementRef.nativeElement.accessibilityRoles = val;
  }
  get accessibilityRoles() {
    return this.elementRef.nativeElement.accessibilityRoles;
  }
  @Input()
  set accessibilityTexts(
    val: FlexibleColumnLayoutElement['accessibilityTexts']
  ) {
    this.elementRef.nativeElement.accessibilityTexts = val;
  }
  get accessibilityTexts() {
    return this.elementRef.nativeElement.accessibilityTexts;
  }
  @Input()
  set columnLayout(val: FlexibleColumnLayoutElement['columnLayout']) {
    this.elementRef.nativeElement.columnLayout = val;
  }
  get columnLayout() {
    return this.elementRef.nativeElement.columnLayout;
  }
  @Input()
  set endColumnVisible(val: FlexibleColumnLayoutElement['endColumnVisible']) {
    this.elementRef.nativeElement.endColumnVisible = booleanInput(val);
  }
  get endColumnVisible() {
    return this.elementRef.nativeElement.hasAttribute('end-column-visible');
  }
  @Input()
  set hideArrows(val: FlexibleColumnLayoutElement['hideArrows']) {
    this.elementRef.nativeElement.hideArrows = booleanInput(val);
  }
  get hideArrows() {
    return this.elementRef.nativeElement.hasAttribute('hide-arrows');
  }
  @Input()
  set layout(val: FlexibleColumnLayoutElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout() {
    return this.elementRef.nativeElement.layout;
  }
  @Input()
  set midColumnVisible(val: FlexibleColumnLayoutElement['midColumnVisible']) {
    this.elementRef.nativeElement.midColumnVisible = booleanInput(val);
  }
  get midColumnVisible() {
    return this.elementRef.nativeElement.hasAttribute('mid-column-visible');
  }
  @Input()
  set startColumnVisible(
    val: FlexibleColumnLayoutElement['startColumnVisible']
  ) {
    this.elementRef.nativeElement.startColumnVisible = booleanInput(val);
  }
  get startColumnVisible() {
    return this.elementRef.nativeElement.hasAttribute('start-column-visible');
  }
  @Input()
  set visibleColumns(val: FlexibleColumnLayoutElement['visibleColumns']) {
    this.elementRef.nativeElement.visibleColumns = val;
  }
  get visibleColumns() {
    return this.elementRef.nativeElement.visibleColumns;
  }

  @Output('layout-change') layoutChange: Observable<
    CustomEvent<OutputTypes['layoutChange']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<FlexibleColumnLayoutElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get endColumn(): FlexibleColumnLayoutElement['endColumn'] {
    return this.elementRef.nativeElement.endColumn;
  }

  get midColumn(): FlexibleColumnLayoutElement['midColumn'] {
    return this.elementRef.nativeElement.midColumn;
  }

  get startColumn(): FlexibleColumnLayoutElement['startColumn'] {
    return this.elementRef.nativeElement.startColumn;
  }
}
