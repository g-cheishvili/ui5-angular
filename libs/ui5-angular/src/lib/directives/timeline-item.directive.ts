import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
interface TimelineItemElement {
  icon: string;
  name: string;
  nameClickable: BooleanInputType;
  subtitleText: string;
  titleText: string;

  // Slots
}

interface OutputTypes {
  nameClick: void;
}

@Directive({
  selector: 'ui5-timeline-item',
})
export class TimelineItemDirective {
  @Input()
  set icon(val: TimelineItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set name(val: TimelineItemElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set nameClickable(val: TimelineItemElement['nameClickable']) {
    this.elementRef.nativeElement.nameClickable = booleanInput(val);
  }
  get nameClickable() {
    return this.elementRef.nativeElement.hasAttribute('name-clickable');
  }
  @Input()
  set subtitleText(val: TimelineItemElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.subtitleText;
  }
  @Input()
  set titleText(val: TimelineItemElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.titleText;
  }

  @Output('name-click') nameClick: Observable<
    CustomEvent<OutputTypes['nameClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<TimelineItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
