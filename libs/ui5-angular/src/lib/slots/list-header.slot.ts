import { Directive } from '@angular/core';

@Directive({
  selector: '[list-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class ListHeaderSlot {}
