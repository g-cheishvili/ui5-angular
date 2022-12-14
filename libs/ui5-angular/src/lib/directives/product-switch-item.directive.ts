import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
interface ProductSwitchItemElement {
  icon: string;
  subtitleText: string;
  target: string;
  targetSrc: string;
  titleText: string;

  // Slots
}

interface OutputTypes {
  click: void;
}

@Directive({
  selector: 'ui5-product-switch-item',
})
export class ProductSwitchItemDirective {
  @Input()
  set icon(val: ProductSwitchItemElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set subtitleText(val: ProductSwitchItemElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.subtitleText;
  }
  @Input()
  set target(val: ProductSwitchItemElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target() {
    return this.elementRef.nativeElement.target;
  }
  @Input()
  set targetSrc(val: ProductSwitchItemElement['targetSrc']) {
    this.elementRef.nativeElement.targetSrc = val;
  }
  get targetSrc() {
    return this.elementRef.nativeElement.targetSrc;
  }
  @Input()
  set titleText(val: ProductSwitchItemElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.titleText;
  }

  @Output() click: Observable<CustomEvent<OutputTypes['click']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<ProductSwitchItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
