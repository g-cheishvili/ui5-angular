import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-button[tab-container-overflow-button]',
  host: {
    '[attr.slot]': '"overflowButton"',
  },
})
export class TabContainerOverflowButtonSlot {}
