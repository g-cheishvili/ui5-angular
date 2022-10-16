import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-token[multi-input-tokens]',
  host: {
    '[attr.slot]': '"tokens"',
  },
})
export class MultiInputTokensSlot {}
