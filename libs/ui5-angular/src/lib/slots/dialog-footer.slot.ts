import { Directive } from '@angular/core';

@Directive({
  selector: '[dialog-footer]',
  host: {
    '[attr.slot]': '"footer"',
  },
})
export class DialogFooterSlot {}
