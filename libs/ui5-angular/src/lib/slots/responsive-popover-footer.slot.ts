import { Directive } from '@angular/core';

@Directive({
  selector: '[responsive-popover-footer]',
  host: {
    '[attr.slot]': '"footer"',
  },
})
export class ResponsivePopoverFooterSlot {}
