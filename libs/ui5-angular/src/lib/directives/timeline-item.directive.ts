import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
interface TimelineItemElement extends HTMLElement {
  icon: string;
  name: string;
  nameClickable: boolean;
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
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as TimelineItemElement['icon'];
  }
  @Input()
  set name(val: TimelineItemElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as TimelineItemElement['name'];
  }
  @Input()
  set nameClickable(val: TimelineItemElement['nameClickable']) {
    this.elementRef.nativeElement.nameClickable = val;
  }
  get nameClickable() {
    return this.elementRef.nativeElement.hasAttribute('name-clickable');
  }
  @Input()
  set subtitleText(val: TimelineItemElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.getAttribute(
      'subtitle-text'
    ) as unknown as TimelineItemElement['subtitleText'];
  }
  @Input()
  set titleText(val: TimelineItemElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.getAttribute(
      'title-text'
    ) as unknown as TimelineItemElement['titleText'];
  }

  @Output('name-click') nameClick: Observable<
    CustomEvent<OutputTypes['nameClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<TimelineItemElement>) {}

  get element(): TimelineItemElement {
    return this.elementRef.nativeElement;
  }
}
