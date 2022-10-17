import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-bar[page-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class PageHeaderSlot {}
