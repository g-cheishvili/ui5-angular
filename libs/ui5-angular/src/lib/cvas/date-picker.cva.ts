import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { DatePickerDirective } from '../directives/date-picker.directive';

@Directive({
  selector: 'ui5-date-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerCva),
      multi: true,
    },
  ],
})
export class DatePickerCva extends GenericControlValueAccessor<
  DatePickerDirective['value']
> {
  constructor(private elementRef: ElementRef<DatePickerDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change'),
        fromEvent(elementRef.nativeElement, 'input')
      ),
    });
  }
}
