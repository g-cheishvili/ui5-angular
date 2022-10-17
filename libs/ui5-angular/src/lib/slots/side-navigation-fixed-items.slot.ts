import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-side-navigation-item[side-navigation-fixed-items]',
  host: {
    '[attr.slot]': '"fixedItems"',
  },
})
export class SideNavigationFixedItemsSlot {}
