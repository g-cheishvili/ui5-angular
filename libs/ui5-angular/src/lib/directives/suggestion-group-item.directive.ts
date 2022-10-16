import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/SuggestionGroupItem.js';
interface SuggestionGroupItemElement extends HTMLElement {
  text: string;

  // Slots
}

@Directive({
  selector: 'ui5-suggestion-group-item',
})
export class SuggestionGroupItemDirective {
  @Input()
  set text(val: SuggestionGroupItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as SuggestionGroupItemElement['text'];
  }

  constructor(private elementRef: ElementRef<SuggestionGroupItemElement>) {}

  get element(): SuggestionGroupItemElement {
    return this.elementRef.nativeElement;
  }
}
