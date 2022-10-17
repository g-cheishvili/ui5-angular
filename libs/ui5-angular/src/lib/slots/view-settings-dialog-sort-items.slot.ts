import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-sort-item[view-settings-dialog-sort-items]',
  host: {
    '[attr.slot]': '"sortItems"',
  },
})
export class ViewSettingsDialogSortItemsSlot {}
