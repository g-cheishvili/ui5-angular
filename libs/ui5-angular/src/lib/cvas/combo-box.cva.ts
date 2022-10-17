import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { ComboBoxDirective } from '../directives/combo-box.directive';

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBoxCva),
      multi: true,
    },
  ],
})
export class ComboBoxCva extends GenericControlValueAccessor<
  ComboBoxDirective['value']
> {
  constructor(private elementRef: ElementRef<ComboBoxDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
      },
      valueUpdatedNotifier$: merge(),
    });
  }
}
