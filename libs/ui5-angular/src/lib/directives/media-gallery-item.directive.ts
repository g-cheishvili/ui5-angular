import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';
interface MediaGalleryItemElement extends HTMLElement {
  disabled: boolean;
  layout: 'Square' | 'Wide';
  selected: boolean;

  // Slots
  thumbnail: HTMLElement;
}

@Directive({
  selector: 'ui5-media-gallery-item',
})
export class MediaGalleryItemDirective {
  @Input()
  set disabled(val: MediaGalleryItemElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set layout(val: MediaGalleryItemElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout() {
    return this.elementRef.nativeElement.getAttribute(
      'layout'
    ) as unknown as MediaGalleryItemElement['layout'];
  }
  @Input()
  set selected(val: MediaGalleryItemElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  constructor(private elementRef: ElementRef<MediaGalleryItemElement>) {}

  get element(): MediaGalleryItemElement {
    return this.elementRef.nativeElement;
  }

  get thumbnail(): MediaGalleryItemElement['thumbnail'] {
    return this.elementRef.nativeElement.thumbnail;
  }
}
