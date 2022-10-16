import { Directive } from '@angular/core';

@Directive({
  selector: '[select-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class SelectValueStateMessageSlot {}
