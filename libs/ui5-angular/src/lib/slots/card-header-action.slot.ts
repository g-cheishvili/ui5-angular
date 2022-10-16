import { Directive } from '@angular/core';

@Directive({
  selector: '[card-header-action]',
  host: {
    '[attr.slot]': '"action"',
  },
})
export class CardHeaderActionSlot {}
