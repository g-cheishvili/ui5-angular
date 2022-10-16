import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-tab-separator[tab-sub-tabs], ui5-tab[tab-sub-tabs]',
  host: {
    '[attr.slot]': '"subTabs"',
  },
})
export class TabSubTabsSlot {}
