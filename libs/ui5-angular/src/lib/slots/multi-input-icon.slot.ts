import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-icon[multi-input-icon]',
  host: {
    '[attr.slot]': '"icon"',
  },
})
export class MultiInputIconSlot {}
