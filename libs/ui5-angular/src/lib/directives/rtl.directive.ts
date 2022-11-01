import { Directive, Input } from '@angular/core';
import { booleanInput, BooleanInputType } from '../utils/boolean-input';

@Directive({
  selector: '[ui5Rtl]',
  host: {
    '[attr.dir]': 'isRtl ? "rtl" : "ltr"',
  },
})
export class RtlDirective {
  @Input('ui5Rtl')
  get isRtl(): boolean {
    return this._isRtl;
  }

  set isRtl(value: BooleanInputType) {
    this._isRtl = booleanInput(value);
  }

  private _isRtl = true;
}
