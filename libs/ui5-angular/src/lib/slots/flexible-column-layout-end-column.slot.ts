import { Directive } from '@angular/core';

@Directive({
  selector: '[flexible-column-layout-end-column]',
  host: {
    '[attr.slot]': '"endColumn"',
  },
})
export class FlexibleColumnLayoutEndColumnSlot {}
