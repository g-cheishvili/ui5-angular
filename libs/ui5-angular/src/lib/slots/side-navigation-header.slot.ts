import { Directive } from '@angular/core';

@Directive({
  selector: '[side-navigation-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class SideNavigationHeaderSlot {}
