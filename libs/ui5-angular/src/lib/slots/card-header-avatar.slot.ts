import { Directive } from '@angular/core';

@Directive({
  selector: '[card-header-avatar]',
  host: {
    '[attr.slot]': '"avatar"',
  },
})
export class CardHeaderAvatarSlot {}
