import { Directive } from '@angular/core';

@Directive({
  selector: '[dynamic-side-content-side-content]',
  host: {
    '[attr.slot]': '"sideContent"',
  },
})
export class DynamicSideContentSideContentSlot {}
