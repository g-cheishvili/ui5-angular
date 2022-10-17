import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { DateTimePickerDirective } from '../directives/date-time-picker.directive';

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerCva),
      multi: true,
    },
  ],
})
export class DateTimePickerCva extends GenericControlValueAccessor<
  DateTimePickerDirective['value']
> {
  constructor(
    private elementRef: ElementRef<DateTimePickerDirective['element']>
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
