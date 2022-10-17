import { Directive } from '@angular/core';

@Directive({
  selector: '[illustrated-message-title]',
  host: {
    '[attr.slot]': '"title"',
  },
})
export class IllustratedMessageTitleSlot {}
