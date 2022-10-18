import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/SuggestionItem.js';
interface SuggestionItemElement {
  additionalText: string;
  additionalTextState: 'None' | 'Success' | 'Warning' | 'Error' | 'Information';
  description: string;
  icon: string;
  iconEnd: BooleanInputType;
  image: string;
  text: string;
  type: 'Active' | 'Detail' | 'Inactive';

  // Slots
}

@Directive({
  selector: 'ui5-suggestion-item',
})
export class SuggestionItemDirective {
  @Input()
  set additionalText(val: SuggestionItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text'
    ) as unknown as SuggestionItemElement['additionalText'];
  }
  @Input()
  set additionalTextState(val: SuggestionItemElement['additionalTextState']) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState() {
    return this.elementRef.nativeElement.getAttribute(
      'additional-text-state'
    ) as unknown as SuggestionItemElement['additionalTextState'];
  }
  @Input()
  set description(val: SuggestionItemElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description() {
    return this.elementRef.nativeElement.getAttribute(
      'description'
    ) as unknown as SuggestionItemElement['description'];
  }
  @Input()
  set icon(val: SuggestionItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as SuggestionItemElement['icon'];
  }
  @Input()
  set iconEnd(val: SuggestionItemElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = booleanInput(val);
  }
  get iconEnd() {
    return this.elementRef.nativeElement.hasAttribute('icon-end');
  }
  @Input()
  set image(val: SuggestionItemElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image() {
    return this.elementRef.nativeElement.getAttribute(
      'image'
    ) as unknown as SuggestionItemElement['image'];
  }
  @Input()
  set text(val: SuggestionItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.getAttribute(
      'text'
    ) as unknown as SuggestionItemElement['text'];
  }
  @Input()
  set type(val: SuggestionItemElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type() {
    return this.elementRef.nativeElement.getAttribute(
      'type'
    ) as unknown as SuggestionItemElement['type'];
  }

  constructor(
    private elementRef: ElementRef<SuggestionItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
