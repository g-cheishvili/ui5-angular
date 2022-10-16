import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/ColorPalettePopover.js';
interface ColorPalettePopoverElement extends HTMLElement {
  defaultColor: string;
  showDefaultColor: boolean;
  showMoreColors: boolean;
  showRecentColors: boolean;

  // Slots
}

interface OutputTypes {
  itemClick: { color: string };
}

@Directive({
  selector: 'ui5-color-palette-popover',
})
export class ColorPalettePopoverDirective {
  @Input()
  set defaultColor(val: ColorPalettePopoverElement['defaultColor']) {
    this.elementRef.nativeElement.defaultColor = val;
  }
  get defaultColor() {
    return this.elementRef.nativeElement.getAttribute(
      'default-color'
    ) as unknown as ColorPalettePopoverElement['defaultColor'];
  }
  @Input()
  set showDefaultColor(val: ColorPalettePopoverElement['showDefaultColor']) {
    this.elementRef.nativeElement.showDefaultColor = val;
  }
  get showDefaultColor() {
    return this.elementRef.nativeElement.hasAttribute('show-default-color');
  }
  @Input()
  set showMoreColors(val: ColorPalettePopoverElement['showMoreColors']) {
    this.elementRef.nativeElement.showMoreColors = val;
  }
  get showMoreColors() {
    return this.elementRef.nativeElement.hasAttribute('show-more-colors');
  }
  @Input()
  set showRecentColors(val: ColorPalettePopoverElement['showRecentColors']) {
    this.elementRef.nativeElement.showRecentColors = val;
  }
  get showRecentColors() {
    return this.elementRef.nativeElement.hasAttribute('show-recent-colors');
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ColorPalettePopoverElement>) {}

  get element(): ColorPalettePopoverElement {
    return this.elementRef.nativeElement;
  }
}
