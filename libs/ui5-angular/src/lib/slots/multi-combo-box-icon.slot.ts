import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-icon[multi-combo-box-icon]',
  host: {
    '[attr.slot]': '"icon"',
  },
})
export class MultiComboBoxIconSlot {}
