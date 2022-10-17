import { Directive } from '@angular/core';

@Directive({
  selector: '[date-range-picker-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class DateRangePickerValueStateMessageSlot {}
