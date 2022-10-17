import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-bar[page-footer]',
  host: {
    '[attr.slot]': '"footer"',
  },
})
export class PageFooterSlot {}
