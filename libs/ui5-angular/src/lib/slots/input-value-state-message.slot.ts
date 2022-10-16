import { Directive } from '@angular/core';

@Directive({
  selector: '[input-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class InputValueStateMessageSlot {}
