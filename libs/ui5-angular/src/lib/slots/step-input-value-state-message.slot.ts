import { Directive } from '@angular/core';

@Directive({
  selector: '[step-input-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class StepInputValueStateMessageSlot {}
