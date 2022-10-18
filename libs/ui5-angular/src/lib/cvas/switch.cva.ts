import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { SwitchDirective } from '../directives/switch.directive';

@Directive({
  selector: 'ui5-switch',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchCva),
      multi: true,
    },
  ],
})
export class SwitchCva extends GenericControlValueAccessor<
  SwitchDirective['checked']
> {
  constructor(private elementRef: ElementRef<SwitchDirective['element']>) {
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
