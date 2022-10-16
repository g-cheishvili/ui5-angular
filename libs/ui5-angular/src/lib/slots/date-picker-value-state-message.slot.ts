import { Directive } from '@angular/core';

@Directive({
  selector: '[date-picker-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class DatePickerValueStateMessageSlot {}
