import { Directive } from '@angular/core';

@Directive({
  selector: '[responsive-popover-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class ResponsivePopoverHeaderSlot {}
