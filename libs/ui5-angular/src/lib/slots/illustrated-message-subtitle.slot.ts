import { Directive } from '@angular/core';

@Directive({
  selector: '[illustrated-message-subtitle]',
  host: {
    '[attr.slot]': '"subtitle"',
  },
})
export class IllustratedMessageSubtitleSlot {}
