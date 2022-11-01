import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { RangeSliderDirective } from '../directives/range-slider.directive';

@Directive({
  selector: 'ui5-range-slider',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSliderCva),
      multi: true,
    },
  ],
})
export class RangeSliderCva extends GenericControlValueAccessor<{
  endValue: RangeSliderDirective['endValue'];
  startValue: RangeSliderDirective['startValue'];
}> {
  constructor(private elementRef: ElementRef<RangeSliderDirective['element']>) {
    super({
      get value() {
        return {
          endValue: elementRef.nativeElement.endValue,
          startValue: elementRef.nativeElement.startValue,
        };
      },
      set value(val) {
        elementRef.nativeElement.endValue = val?.endValue;
        elementRef.nativeElement.startValue = val?.startValue;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change'),
        fromEvent(elementRef.nativeElement, 'input')
      ),
    });
  }
}
