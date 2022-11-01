import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/ColorPalettePopover.js';
interface ColorPalettePopoverElement {
  defaultColor: any;
  showDefaultColor: BooleanInputType;
  showMoreColors: BooleanInputType;
  showRecentColors: BooleanInputType;

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
    this.elementRef.nativeElement.showDefaultColor = booleanInput(val);
  }
  get showDefaultColor() {
    return this.elementRef.nativeElement.hasAttribute('show-default-color');
  }
  @Input()
  set showMoreColors(val: ColorPalettePopoverElement['showMoreColors']) {
    this.elementRef.nativeElement.showMoreColors = booleanInput(val);
  }
  get showMoreColors() {
    return this.elementRef.nativeElement.hasAttribute('show-more-colors');
  }
  @Input()
  set showRecentColors(val: ColorPalettePopoverElement['showRecentColors']) {
    this.elementRef.nativeElement.showRecentColors = booleanInput(val);
  }
  get showRecentColors() {
    return this.elementRef.nativeElement.hasAttribute('show-recent-colors');
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<ColorPalettePopoverElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
