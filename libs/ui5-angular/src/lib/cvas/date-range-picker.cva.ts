import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { DateRangePickerDirective } from '../directives/date-range-picker.directive';

@Directive({
  selector: 'ui5-daterange-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerCva),
      multi: true,
    },
  ],
})
export class DateRangePickerCva extends GenericControlValueAccessor<
  DateRangePickerDirective['value']
> {
  constructor(
    private elementRef: ElementRef<DateRangePickerDirective['element']>
  ) {
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
