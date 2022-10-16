import { Directive } from '@angular/core';

@Directive({
  selector: '[card-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class CardHeaderSlot {}
