import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Breadcrumbs.js';
interface BreadcrumbsElement extends HTMLElement {
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
    return this.elementRef.nativeElement.getAttribute(
      'design'
    ) as unknown as BreadcrumbsElement['design'];
  }
  @Input()
  set separatorStyle(val: BreadcrumbsElement['separatorStyle']) {
    this.elementRef.nativeElement.separatorStyle = val;
  }
  get separatorStyle() {
    return this.elementRef.nativeElement.getAttribute(
      'separator-style'
    ) as unknown as BreadcrumbsElement['separatorStyle'];
  }

  @Output('item-click') itemClick: Observable<
    CustomEvent<OutputTypes['itemClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<BreadcrumbsElement>) {}

  get element(): BreadcrumbsElement {
    return this.elementRef.nativeElement;
  }
}
