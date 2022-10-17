import { Directive } from '@angular/core';

@Directive({
  selector: '[media-gallery-item-thumbnail]',
  host: {
    '[attr.slot]': '"thumbnail"',
  },
})
export class MediaGalleryItemThumbnailSlot {}
