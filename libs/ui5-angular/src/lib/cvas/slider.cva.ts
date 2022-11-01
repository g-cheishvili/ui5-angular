import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { SliderDirective } from '../directives/slider.directive';

@Directive({
  selector: 'ui5-slider',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderCva),
      multi: true,
    },
  ],
})
export class SliderCva extends GenericControlValueAccessor<
  SliderDirective['value']
> {
  constructor(private elementRef: ElementRef<SliderDirective['element']>) {
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
