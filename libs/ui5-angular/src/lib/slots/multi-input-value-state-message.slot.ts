import { Directive } from '@angular/core';

@Directive({
  selector: '[multi-input-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class MultiInputValueStateMessageSlot {}
