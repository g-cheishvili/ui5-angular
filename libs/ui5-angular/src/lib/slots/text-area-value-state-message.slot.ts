import { Directive } from '@angular/core';

@Directive({
  selector: '[text-area-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class TextAreaValueStateMessageSlot {}
