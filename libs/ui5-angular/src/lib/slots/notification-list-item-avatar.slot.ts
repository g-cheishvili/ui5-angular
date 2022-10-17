import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-avatar[notification-list-item-avatar]',
  host: {
    '[attr.slot]': '"avatar"',
  },
})
export class NotificationListItemAvatarSlot {}
