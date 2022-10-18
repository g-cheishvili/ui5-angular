import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../generic-control-value-accessor';
import { fromEvent, merge } from 'rxjs';

import { FileUploaderDirective } from '../directives/file-uploader.directive';

@Directive({
  selector: 'ui5-file-uploader',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderCva),
      multi: true,
    },
  ],
})
export class FileUploaderCva extends GenericControlValueAccessor<
  FileUploaderDirective['value']
> {
  constructor(
    private elementRef: ElementRef<FileUploaderDirective['element']>
  ) {
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
