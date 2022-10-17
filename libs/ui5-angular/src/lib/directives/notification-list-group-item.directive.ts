import { Directive, ElementRef, Input, Output } from '@angular/core';

import { NotificationActionDirective } from './notification-action.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
interface NotificationListGroupItemElement extends HTMLElement {
  collapsed: boolean;
  showCounter: boolean;
  busy: boolean;
  busyDelay: number;
  priority: 'High' | 'Low' | 'Medium' | 'None';
  read: boolean;
  showClose: boolean;
  titleText: string;

  // Slots
  actions: Array<NotificationActionDirective['element']>;
}

interface OutputTypes {
  toggle: void;

  close: void;
}

@Directive({
  selector: 'ui5-li-notification-group',
})
export class NotificationListGroupItemDirective {
  @Input()
  set collapsed(val: NotificationListGroupItemElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed() {
    return this.elementRef.nativeElement.hasAttribute('collapsed');
  }
  @Input()
  set showCounter(val: NotificationListGroupItemElement['showCounter']) {
    this.elementRef.nativeElement.showCounter = val;
  }
  get showCounter() {
    return this.elementRef.nativeElement.hasAttribute('show-counter');
  }
  @Input()
  set busy(val: NotificationListGroupItemElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: NotificationListGroupItemElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.getAttribute(
      'busy-delay'
    ) as unknown as NotificationListGroupItemElement['busyDelay'];
  }
  @Input()
  set priority(val: NotificationListGroupItemElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority() {
    return this.elementRef.nativeElement.getAttribute(
      'priority'
    ) as unknown as NotificationListGroupItemElement['priority'];
  }
  @Input()
  set read(val: NotificationListGroupItemElement['read']) {
    this.elementRef.nativeElement.read = val;
  }
  get read() {
    return this.elementRef.nativeElement.hasAttribute('read');
  }
  @Input()
  set showClose(val: NotificationListGroupItemElement['showClose']) {
    this.elementRef.nativeElement.showClose = val;
  }
  get showClose() {
    return this.elementRef.nativeElement.hasAttribute('show-close');
  }
  @Input()
  set titleText(val: NotificationListGroupItemElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.getAttribute(
      'title-text'
    ) as unknown as NotificationListGroupItemElement['titleText'];
  }

  @Output() toggle: Observable<CustomEvent<OutputTypes['toggle']>> =
    new PlaceholderOutput();
  @Output() close: Observable<CustomEvent<OutputTypes['close']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<NotificationListGroupItemElement>
  ) {}

  get element(): NotificationListGroupItemElement {
    return this.elementRef.nativeElement;
  }

  get actions(): NotificationListGroupItemElement['actions'] {
    return this.elementRef.nativeElement.actions;
  }
}
