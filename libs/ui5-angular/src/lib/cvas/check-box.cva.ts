import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { CheckBoxDirective } from '../directives/check-box.directive';

@Directive({
  selector: 'ui5-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxCva),
      multi: true,
    },
  ],
})
export class CheckBoxCva extends GenericControlValueAccessor<
  CheckBoxDirective['checked']
> {
  constructor(private elementRef: ElementRef<CheckBoxDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.checked;
      },
      set value(val) {
        elementRef.nativeElement.checked = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change')
      ),
    });
  }
}
