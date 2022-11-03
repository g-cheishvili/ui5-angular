import { Directive, Input } from '@angular/core';
import { booleanInput, BooleanInputType } from '../utils/boolean-input';

@Directive({
  selector: '[ui5Compact]',
  host: {
    '[class.ui5-content-density-compact]': 'ui5Compact',
  },
})
export class CompactDirective {
  @Input()
  get ui5Compact(): BooleanInputType {
    return this._ui5Compact;
  }

  set ui5Compact(value: BooleanInputType) {
    this._ui5Compact = booleanInput(value);
  }

  private _ui5Compact: BooleanInputType = true;
}
