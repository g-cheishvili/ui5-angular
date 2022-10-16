import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-icon[message-strip-icon]',
  host: {
    '[attr.slot]': '"icon"',
  },
})
export class MessageStripIconSlot {}
