import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-icon[token-close-icon]',
  host: {
    '[attr.slot]': '"closeIcon"',
  },
})
export class TokenCloseIconSlot {}
