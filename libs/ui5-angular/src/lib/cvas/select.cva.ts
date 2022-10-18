import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { SelectDirective } from '../directives/select.directive';

@Directive({
  selector: 'ui5-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCva),
      multi: true,
    },
  ],
})
export class SelectCva extends GenericControlValueAccessor<
  SelectDirective['value']
> {
  constructor(private elementRef: ElementRef<SelectDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change')
      ),
    });
  }
}
