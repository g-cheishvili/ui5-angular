import { Directive } from '@angular/core';

@Directive({
  selector: '[panel-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class PanelHeaderSlot {}
