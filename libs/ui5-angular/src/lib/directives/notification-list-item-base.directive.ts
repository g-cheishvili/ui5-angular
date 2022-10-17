import { Directive, ElementRef, Input, Output } from '@angular/core';

import { NotificationActionDirective } from './notification-action.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/NotificationListItemBase.js';
interface NotificationListItemBaseElement {
  busy: BooleanInputType;
  busyDelay: number;
  priority: 'High' | 'Low' | 'Medium' | 'None';
  read: BooleanInputType;
  showClose: BooleanInputType;
  titleText: string;

  // Slots
  actions: Array<NotificationActionDirective['element']>;
}

interface OutputTypes {
  close: void;
}

@Directive({
  selector: 'ui5-li-notification-group',
})
export class NotificationListItemBaseDirective {
  @Input()
  set busy(val: NotificationListItemBaseElement['busy']) {
    this.elementRef.nativeElement.busy = booleanInput(val);
  }
  get busy() {
    return this.elementRef.nativeElement.hasAttribute('busy');
  }
  @Input()
  set busyDelay(val: NotificationListItemBaseElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay() {
    return this.elementRef.nativeElement.getAttribute(
      'busy-delay'
    ) as unknown as NotificationListItemBaseElement['busyDelay'];
  }
  @Input()
  set priority(val: NotificationListItemBaseElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority() {
    return this.elementRef.nativeElement.getAttribute(
      'priority'
    ) as unknown as NotificationListItemBaseElement['priority'];
  }
  @Input()
  set read(val: NotificationListItemBaseElement['read']) {
    this.elementRef.nativeElement.read = booleanInput(val);
  }
  get read() {
    return this.elementRef.nativeElement.hasAttribute('read');
  }
  @Input()
  set showClose(val: NotificationListItemBaseElement['showClose']) {
    this.elementRef.nativeElement.showClose = booleanInput(val);
  }
  get showClose() {
    return this.elementRef.nativeElement.hasAttribute('show-close');
  }
  @Input()
  set titleText(val: NotificationListItemBaseElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.getAttribute(
      'title-text'
    ) as unknown as NotificationListItemBaseElement['titleText'];
  }

  @Output() close: Observable<CustomEvent<OutputTypes['close']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<
      NotificationListItemBaseElement & HTMLElement
    >
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get actions(): NotificationListItemBaseElement['actions'] {
    return this.elementRef.nativeElement.actions;
  }
}
