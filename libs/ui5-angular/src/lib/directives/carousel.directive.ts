import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents/dist/Carousel.js';
interface CarouselElement extends HTMLElement {
  arrowsPlacement: 'Content' | 'Navigation';
  cyclic: boolean;
  hideNavigationArrows: boolean;
  hidePageIndicator: boolean;
  itemsPerPageL: number;
  itemsPerPageM: number;
  itemsPerPageS: number;

  // Slots
}

interface OutputTypes {
  navigate: { selectedIndex: number };
}

@Directive({
  selector: 'ui5-carousel',
})
export class CarouselDirective {
  @Input()
  set arrowsPlacement(val: CarouselElement['arrowsPlacement']) {
    this.elementRef.nativeElement.arrowsPlacement = val;
  }
  get arrowsPlacement() {
    return this.elementRef.nativeElement.getAttribute(
      'arrows-placement'
    ) as unknown as CarouselElement['arrowsPlacement'];
  }
  @Input()
  set cyclic(val: CarouselElement['cyclic']) {
    this.elementRef.nativeElement.cyclic = val;
  }
  get cyclic() {
    return this.elementRef.nativeElement.hasAttribute('cyclic');
  }
  @Input()
  set hideNavigationArrows(val: CarouselElement['hideNavigationArrows']) {
    this.elementRef.nativeElement.hideNavigationArrows = val;
  }
  get hideNavigationArrows() {
    return this.elementRef.nativeElement.hasAttribute('hide-navigation-arrows');
  }
  @Input()
  set hidePageIndicator(val: CarouselElement['hidePageIndicator']) {
    this.elementRef.nativeElement.hidePageIndicator = val;
  }
  get hidePageIndicator() {
    return this.elementRef.nativeElement.hasAttribute('hide-page-indicator');
  }
  @Input()
  set itemsPerPageL(val: CarouselElement['itemsPerPageL']) {
    this.elementRef.nativeElement.itemsPerPageL = val;
  }
  get itemsPerPageL() {
    return this.elementRef.nativeElement.getAttribute(
      'items-per-page-l'
    ) as unknown as CarouselElement['itemsPerPageL'];
  }
  @Input()
  set itemsPerPageM(val: CarouselElement['itemsPerPageM']) {
    this.elementRef.nativeElement.itemsPerPageM = val;
  }
  get itemsPerPageM() {
    return this.elementRef.nativeElement.getAttribute(
      'items-per-page-m'
    ) as unknown as CarouselElement['itemsPerPageM'];
  }
  @Input()
  set itemsPerPageS(val: CarouselElement['itemsPerPageS']) {
    this.elementRef.nativeElement.itemsPerPageS = val;
  }
  get itemsPerPageS() {
    return this.elementRef.nativeElement.getAttribute(
      'items-per-page-s'
    ) as unknown as CarouselElement['itemsPerPageS'];
  }

  @Output() navigate: Observable<CustomEvent<OutputTypes['navigate']>> =
    new PlaceholderOutput();
  constructor(private elementRef: ElementRef<CarouselElement>) {}

  get element(): CarouselElement {
    return this.elementRef.nativeElement;
  }
}
