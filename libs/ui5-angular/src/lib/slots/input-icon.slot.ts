import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-icon[input-icon]',
  host: {
    '[attr.slot]': '"icon"',
  },
})
export class InputIconSlot {}
