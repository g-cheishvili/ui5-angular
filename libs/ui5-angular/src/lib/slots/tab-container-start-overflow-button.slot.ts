import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-button[tab-container-start-overflow-button]',
  host: {
    '[attr.slot]': '"startOverflowButton"',
  },
})
export class TabContainerStartOverflowButtonSlot {}
