import { Directive } from '@angular/core';

@Directive({
  selector: '[flexible-column-layout-mid-column]',
  host: {
    '[attr.slot]': '"midColumn"',
  },
})
export class FlexibleColumnLayoutMidColumnSlot {}
