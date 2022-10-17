import { Directive } from '@angular/core';

@Directive({
  selector: '[date-time-picker-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class DateTimePickerValueStateMessageSlot {}
