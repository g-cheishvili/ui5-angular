import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
interface MultiComboBoxItemElement {
  additionalText: string;
  text: string;
  selected: BooleanInputType;

  // Slots
}

@Directive({
  selector: 'ui5-mcb-item',
})
export class MultiComboBoxItemDirective {
  @Input()
  set additionalText(val: MultiComboBoxItemElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText() {
    return this.elementRef.nativeElement.additionalText;
  }
  @Input()
  set text(val: MultiComboBoxItemElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text() {
    return this.elementRef.nativeElement.text;
  }
  @Input()
  set selected(val: MultiComboBoxItemElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  constructor(
    private elementRef: ElementRef<MultiComboBoxItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
