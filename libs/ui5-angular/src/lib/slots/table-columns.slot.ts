import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-table-column[table-columns]',
  host: {
    '[attr.slot]': '"columns"',
  },
})
export class TableColumnsSlot {}
