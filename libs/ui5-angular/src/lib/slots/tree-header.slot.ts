import { Directive } from '@angular/core';

@Directive({
  selector: '[tree-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class TreeHeaderSlot {}
