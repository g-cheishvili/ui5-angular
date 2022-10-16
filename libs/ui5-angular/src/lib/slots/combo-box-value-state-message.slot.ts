import { Directive } from '@angular/core';

@Directive({
  selector: '[combo-box-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class ComboBoxValueStateMessageSlot {}
