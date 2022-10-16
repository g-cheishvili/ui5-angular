import { Directive } from '@angular/core';

@Directive({
  selector: '[file-uploader-value-state-message]',
  host: {
    '[attr.slot]': '"valueStateMessage"',
  },
})
export class FileUploaderValueStateMessageSlot {}
