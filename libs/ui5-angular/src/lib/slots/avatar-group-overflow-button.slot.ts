import { Directive } from '@angular/core';

@Directive({
  selector: '[avatar-group-overflow-button]',
  host: {
    '[attr.slot]': '"overflowButton"',
  },
})
export class AvatarGroupOverflowButtonSlot {}
