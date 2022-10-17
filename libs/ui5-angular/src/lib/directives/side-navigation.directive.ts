import { Directive, ElementRef, Input, Output } from '@angular/core';

import { SideNavigationItemDirective } from './side-navigation-item.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';
import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
interface SideNavigationElement extends HTMLElement {
  collapsed: boolean;

  // Slots
  fixedItems: Array<SideNavigationItemDirective['element']>;
  header: Array<HTMLElement>;
}

interface OutputTypes {
  selectionChange: { item: HTMLElement };
}

@Directive({
  selector: 'ui5-side-navigation',
})
export class SideNavigationDirective {
  @Input()
  set collapsed(val: SideNavigationElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed() {
    return this.elementRef.nativeElement.hasAttribute('collapsed');
  }

  @Output('selection-change') selectionChange: Observable<
    CustomEvent<OutputTypes['selectionChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<SideNavigationElement>) {}

  get element(): SideNavigationElement {
    return this.elementRef.nativeElement;
  }

  get fixedItems(): SideNavigationElement['fixedItems'] {
    return this.elementRef.nativeElement.fixedItems;
  }

  get header(): SideNavigationElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
