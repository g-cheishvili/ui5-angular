import { Directive } from '@angular/core';

@Directive({
  selector: '[popover-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class PopoverHeaderSlot {}
