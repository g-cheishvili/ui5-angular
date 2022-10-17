import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { MultiComboBoxDirective } from '../directives/multi-combo-box.directive';

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiComboBoxCva),
      multi: true,
    },
  ],
})
export class MultiComboBoxCva extends GenericControlValueAccessor<
  MultiComboBoxDirective['value']
> {
  constructor(
    private elementRef: ElementRef<MultiComboBoxDirective['element']>
  ) {
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
