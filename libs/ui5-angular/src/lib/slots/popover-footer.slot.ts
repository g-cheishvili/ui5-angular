import { Directive } from '@angular/core';

@Directive({
  selector: '[popover-footer]',
  host: {
    '[attr.slot]': '"footer"',
  },
})
export class PopoverFooterSlot {}
