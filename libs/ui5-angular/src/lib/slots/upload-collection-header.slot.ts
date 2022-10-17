import { Directive } from '@angular/core';

@Directive({
  selector: '[upload-collection-header]',
  host: {
    '[attr.slot]': '"header"',
  },
})
export class UploadCollectionHeaderSlot {}
