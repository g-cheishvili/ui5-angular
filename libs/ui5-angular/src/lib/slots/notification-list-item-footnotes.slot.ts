import { Directive } from '@angular/core';

@Directive({
  selector: '[notification-list-item-footnotes]',
  host: {
    '[attr.slot]': '"footnotes"',
  },
})
export class NotificationListItemFootnotesSlot {}
