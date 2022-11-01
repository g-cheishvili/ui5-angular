import { Directive } from '@angular/core';

@Directive({
  selector:
    'ui5-li-notification-group[shell-bar-menu-items], ui5-li-notification[shell-bar-menu-items], ui5-li-custom[shell-bar-menu-items], ui5-li-groupheader[shell-bar-menu-items], ui5-li[shell-bar-menu-items]',
  host: {
    '[attr.slot]': '"menuItems"',
  },
})
export class ShellBarMenuItemsSlot {}
