import { Directive } from '@angular/core';

@Directive({
  selector: '[flexible-column-layout-start-column]',
  host: {
    '[attr.slot]': '"startColumn"',
  },
})
export class FlexibleColumnLayoutStartColumnSlot {}
