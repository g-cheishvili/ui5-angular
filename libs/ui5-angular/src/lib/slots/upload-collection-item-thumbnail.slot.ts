import { Directive } from '@angular/core';

@Directive({
  selector: '[upload-collection-item-thumbnail]',
  host: {
    '[attr.slot]': '"thumbnail"',
  },
})
export class UploadCollectionItemThumbnailSlot {}
