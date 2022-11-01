import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-button[tree-list-item-delete-button]',
  host: {
    '[attr.slot]': '"deleteButton"',
  },
})
export class TreeListItemDeleteButtonSlot {}
