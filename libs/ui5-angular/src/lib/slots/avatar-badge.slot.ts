import { Directive } from '@angular/core';

@Directive({
  selector: '[avatar-badge]',
  host: {
    '[attr.slot]': '"badge"',
  },
})
export class AvatarBadgeSlot {}
