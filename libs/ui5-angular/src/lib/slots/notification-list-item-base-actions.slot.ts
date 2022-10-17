import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-notification-action[notification-list-item-base-actions]',
  host: {
    '[attr.slot]': '"actions"',
  },
})
export class NotificationListItemBaseActionsSlot {}
