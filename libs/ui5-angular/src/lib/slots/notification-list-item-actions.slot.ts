import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-notification-action[notification-list-item-actions]',
  host: {
    '[attr.slot]': '"actions"',
  },
})
export class NotificationListItemActionsSlot {}
