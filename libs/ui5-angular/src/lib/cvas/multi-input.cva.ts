import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { MultiInputDirective } from '../directives/multi-input.directive';

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiInputCva),
      multi: true,
    },
  ],
})
export class MultiInputCva extends GenericControlValueAccessor<
  MultiInputDirective['value']
> {
  constructor(private elementRef: ElementRef<MultiInputDirective['element']>) {
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
