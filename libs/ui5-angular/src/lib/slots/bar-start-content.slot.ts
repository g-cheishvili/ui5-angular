import { Directive } from '@angular/core';

@Directive({
  selector: '[bar-start-content]',
  host: {
    '[attr.slot]': '"startContent"',
  },
})
export class BarStartContentSlot {}
