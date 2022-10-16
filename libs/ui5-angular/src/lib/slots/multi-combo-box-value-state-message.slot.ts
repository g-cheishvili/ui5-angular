import { Directive } from '@angular/core';

@Directive({
  selector: '[multi-combo-box-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class MultiComboBoxValueStateMessageSlot {}
