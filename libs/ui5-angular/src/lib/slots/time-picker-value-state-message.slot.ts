import { Directive } from '@angular/core';

@Directive({
  selector: '[time-picker-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class TimePickerValueStateMessageSlot {}
