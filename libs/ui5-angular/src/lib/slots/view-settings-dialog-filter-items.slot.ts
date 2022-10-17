import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-filter-item[view-settings-dialog-filter-items]',
  host: {
    '[attr.slot]': '"filterItems"',
  },
})
export class ViewSettingsDialogFilterItemsSlot {}
