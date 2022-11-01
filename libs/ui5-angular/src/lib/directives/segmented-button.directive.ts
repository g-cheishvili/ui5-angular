import { Directive, ElementRef, Input, Output } from '@angular/core';

import { SegmentedButtonItemDirective } from './segmented-button-item.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/SegmentedButton.js';
interface SegmentedButtonElement {
  accessibleName: string;
  selectedItem: SegmentedButtonItemDirective['element'];

  // Slots
}

interface OutputTypes {
  selectionChange: { selectedItem: HTMLElement };
}

@Directive({
  selector: 'ui5-segmented-button',
})
export class SegmentedButtonDirective {
  @Input()
  set accessibleName(val: SegmentedButtonElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as SegmentedButtonElement['accessibleName'];
  }
  @Input()
  set selectedItem(val: SegmentedButtonElement['selectedItem']) {
    this.elementRef.nativeElement.selectedItem = val;
  }
  get selectedItem() {
    return this.elementRef.nativeElement.getAttribute(
      'selected-item'
    ) as unknown as SegmentedButtonElement['selectedItem'];
  }

  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<SegmentedButtonElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
