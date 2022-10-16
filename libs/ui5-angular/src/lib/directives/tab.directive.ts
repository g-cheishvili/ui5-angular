import { Directive, ElementRef, Input } from '@angular/core';

import { TabSeparatorDirective } from './tab-separator.directive';

import '@ui5/webcomponents/dist/Tab.js';
interface TabElement extends HTMLElement {
  additionalText: string;
  design: 'Critical' | 'Default' | 'Negative' | 'Neutral' | 'Positive';
  disabled: boolean;
  icon: string;
  selected: boolean;
  text: string;

  // Slots
  subTabs: Array<TabSeparatorDirective['element'] | TabDirective['element']>;
}

@Directive({
  selector: 'ui5-tab',
})
export class TabDirective {
  @Input()
  set additionalText(val: TabElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as TabElement['additionalText'];
  }
  @Input()
  set design(val: TabElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as TabElement['design'];
  }
  @Input()
  set disabled(val: TabElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: TabElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as TabElement['icon'];
  }
  @Input()
  set selected(val: TabElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set text(val: TabElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as TabElement['text'];
  }

  constructor(private elementRef: ElementRef<TabElement>) {}

  get element(): TabElement {
    return this.elementRef.nativeElement;
  }

  get subTabs(): TabElement['subTabs'] {
    return this.elementRef.nativeElement.subTabs;
  }
}
