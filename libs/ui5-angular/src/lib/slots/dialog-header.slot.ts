import { Directive } from '@angular/core';

@Directive({
  selector: '[dialog-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class DialogHeaderSlot {}
