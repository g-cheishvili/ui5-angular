import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-filter-item-option[filter-item-values]',
  host: {
    '[attr.slot]': '"values"',
  },
})
export class FilterItemValuesSlot {}
