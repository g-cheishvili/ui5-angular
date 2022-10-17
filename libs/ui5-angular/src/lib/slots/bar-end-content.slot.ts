import { Directive } from '@angular/core';

@Directive({
  selector: '[bar-end-content]',
  host: {
    '[attr.slot]': '"endContent"',
  },
})
export class BarEndContentSlot {}
