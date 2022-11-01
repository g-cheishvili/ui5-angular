import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents/dist/Breadcrumbs.js';
interface BreadcrumbsElement {
  design: 'NoCurrentPage' | 'Standard';
  separatorStyle:
    | 'BackSlash'
    | 'DoubleBackSlash'
    | 'DoubleGreaterThan'
    | 'DoubleSlash'
    | 'GreaterThan'
    | 'Slash';

  // Slots
}

interface OutputTypes {
  itemClick: {
    item: HTMLElement;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
  };
}

@Directive({
  selector: 'ui5-breadcrumbs',
})
export class BreadcrumbsDirective {
  @Input()
  set design(val: BreadcrumbsElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design() {
    return this.elementRef.nativeElement.design;
  }
  @Input()
  set separatorStyle(val: BreadcrumbsElement['separatorStyle']) {
    this.elementRef.nativeElement.separatorStyle = val;
  }
  get separatorStyle() {
    return this.elementRef.nativeElement.separatorStyle;
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<BreadcrumbsElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
