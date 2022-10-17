import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';
interface MediaGalleryItemElement {
  disabled: BooleanInputType;
  layout: 'Square' | 'Wide';
  selected: BooleanInputType;

  // Slots
  thumbnail: HTMLElement;
}

@Directive({
  selector: 'ui5-media-gallery-item',
})
export class MediaGalleryItemDirective {
  @Input()
  set disabled(val: MediaGalleryItemElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
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
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }

  constructor(
    private elementRef: ElementRef<MediaGalleryItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get thumbnail(): MediaGalleryItemElement['thumbnail'] {
    return this.elementRef.nativeElement.thumbnail;
  }
}
