import { Directive, ElementRef, Input, Output } from '@angular/core';

import { AvatarDirective } from './avatar.directive';
import { NotificationActionDirective } from './notification-action.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
interface NotificationListItemElement extends HTMLElement {
  wrappingType: 'None' | 'Normal';
  busy: boolean;
  busyDelay: number;
  priority: 'High' | 'Low' | 'Medium' | 'None';
  read: boolean;
  showClose: boolean;
  titleText: string;

  // Slots
  avatar: AvatarDirective['element'];
  footnotes: Array<HTMLElement>;
  actions: Array<NotificationActionDirective['element']>;
}

interface OutputTypes {
  close: void;
}

@Directive({
  selector: 'ui5-li-notification',
})
export class NotificationListItemDirective {
  @Input()
  set wrappingType(val: NotificationListItemElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType() {
    return this.elementRef.nativeElement.getAttribute(
      'wrapping-type'
    ) as unknown as NotificationListItemElement['wrappingType'];
  }
  @Input()
  set busy(val: NotificationListItemElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: NotificationListItemElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.getAttribute(
      'busy-delay'
    ) as unknown as NotificationListItemElement['busyDelay'];
  }
  @Input()
  set priority(val: NotificationListItemElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority() {
    return this.elementRef.nativeElement.getAttribute(
      'priority'
    ) as unknown as NotificationListItemElement['priority'];
  }
  @Input()
  set read(val: NotificationListItemElement['read']) {
    this.elementRef.nativeElement.read = val;
  }
  get read() {
    return this.elementRef.nativeElement.hasAttribute('read');
  }
  @Input()
  set showClose(val: NotificationListItemElement['showClose']) {
    this.elementRef.nativeElement.showClose = val;
  }
  get showClose() {
    return this.elementRef.nativeElement.hasAttribute('show-close');
  }
  @Input()
  set titleText(val: NotificationListItemElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.getAttribute(
      'title-text'
    ) as unknown as NotificationListItemElement['titleText'];
  }

  @Output() close: Observable<CustomEvent<OutputTypes['close']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<NotificationListItemElement>) {}

  get element(): NotificationListItemElement {
    return this.elementRef.nativeElement;
  }

  get avatar(): NotificationListItemElement['avatar'] {
    return this.elementRef.nativeElement.avatar;
  }

  get footnotes(): NotificationListItemElement['footnotes'] {
    return this.elementRef.nativeElement.footnotes;
  }

  get actions(): NotificationListItemElement['actions'] {
    return this.elementRef.nativeElement.actions;
  }
}
