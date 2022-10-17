import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { RadioButtonDirective } from '../directives/radio-button.directive';

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonCva),
      multi: true,
    },
  ],
})
export class RadioButtonCva extends GenericControlValueAccessor<
  RadioButtonDirective['checked']
> {
  constructor(private elementRef: ElementRef<RadioButtonDirective['element']>) {
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
