import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/MediaGallery.js';
interface MediaGalleryElement {
  interactiveDisplayArea: BooleanInputType;
  layout: 'Auto' | 'Horizontal' | 'Vertical';
  menuHorizontalAlign: 'Left' | 'Right';
  menuVerticalAlign: 'Bottom' | 'Top';
  showAllThumbnails: BooleanInputType;

  // Slots
}

interface OutputTypes {
  displayAreaClick: void;

  overflowClick: void;

  selectionChange: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-media-gallery',
})
export class MediaGalleryDirective {
  @Input()
  set interactiveDisplayArea(
    val: MediaGalleryElement['interactiveDisplayArea']
  ) {
    this.elementRef.nativeElement.interactiveDisplayArea = booleanInput(val);
  }
  get interactiveDisplayArea() {
    return this.elementRef.nativeElement.hasAttribute(
      'interactive-display-area'
    );
  }
  @Input()
  set layout(val: MediaGalleryElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout() {
    return this.elementRef.nativeElement.getAttribute(
      'layout'
    ) as unknown as MediaGalleryElement['layout'];
  }
  @Input()
  set menuHorizontalAlign(val: MediaGalleryElement['menuHorizontalAlign']) {
    this.elementRef.nativeElement.menuHorizontalAlign = val;
  }
  get menuHorizontalAlign() {
    return this.elementRef.nativeElement.getAttribute(
      'menu-horizontal-align'
    ) as unknown as MediaGalleryElement['menuHorizontalAlign'];
  }
  @Input()
  set menuVerticalAlign(val: MediaGalleryElement['menuVerticalAlign']) {
    this.elementRef.nativeElement.menuVerticalAlign = val;
  }
  get menuVerticalAlign() {
    return this.elementRef.nativeElement.getAttribute(
      'menu-vertical-align'
    ) as unknown as MediaGalleryElement['menuVerticalAlign'];
  }
  @Input()
  set showAllThumbnails(val: MediaGalleryElement['showAllThumbnails']) {
    this.elementRef.nativeElement.showAllThumbnails = booleanInput(val);
  }
  get showAllThumbnails() {
    return this.elementRef.nativeElement.hasAttribute('show-all-thumbnails');
  }

  @Output('display-area-click') displayAreaClick: Observable<
    CustomEvent<OutputTypes['displayAreaClick']>
  > = new PlaceholderOutput();
  @Output('overflow-click') overflowClick: Observable<
    CustomEvent<OutputTypes['overflowClick']>
  > = new PlaceholderOutput();
  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<MediaGalleryElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
