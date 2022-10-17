import { Directive, ElementRef, Input, Output } from '@angular/core';

import { FilterItemDirective } from './filter-item.directive';
import { SortItemDirective } from './sort-item.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
interface ViewSettingsDialogElement {
  sortDescending: BooleanInputType;

  // Slots
  filterItems: Array<FilterItemDirective['element']>;
  sortItems: Array<SortItemDirective['element']>;
}

interface OutputTypes {
  beforeOpen: void;

  cancel: {
    sortOrder: string;
    sortBy: string;
    sortByItem: HTMLElement;
    sortDescending: boolean;
    filterItems: Array<any>;
  };

  confirm: {
    sortOrder: string;
    sortBy: string;
    sortByItem: HTMLElement;
    sortDescending: boolean;
    filterItems: Array<any>;
  };
}

@Directive({
  selector: 'ui5-view-settings-dialog',
})
export class ViewSettingsDialogDirective {
  @Input()
  set sortDescending(val: ViewSettingsDialogElement['sortDescending']) {
    this.elementRef.nativeElement.sortDescending = booleanInput(val);
  }
  get sortDescending() {
    return this.elementRef.nativeElement.hasAttribute('sort-descending');
  }

  @Output('before-open') beforeOpen: Observable<
    CustomEvent<OutputTypes['beforeOpen']>
  > = new PlaceholderOutput();
  @Output() cancel: Observable<CustomEvent<OutputTypes['cancel']>> =
    new PlaceholderOutput();
  @Output() confirm: Observable<CustomEvent<OutputTypes['confirm']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<ViewSettingsDialogElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get filterItems(): ViewSettingsDialogElement['filterItems'] {
    return this.elementRef.nativeElement.filterItems;
  }

  get sortItems(): ViewSettingsDialogElement['sortItems'] {
    return this.elementRef.nativeElement.sortItems;
  }
}
