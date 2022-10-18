import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/Dialog.js';
interface DialogElement {
  draggable: BooleanInputType;
  headerText: string;
  resizable: BooleanInputType;
  state: 'None' | 'Success' | 'Warning' | 'Error' | 'Information';
  stretch: BooleanInputType;
  accessibleName: string;
  accessibleNameRef: string;
  initialFocus: string;
  open: BooleanInputType;
  preventFocusRestore: BooleanInputType;

  // Slots
  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;
}

interface OutputTypes {
  afterClose: void;

  afterOpen: void;

  beforeClose: { escPressed: boolean };

  beforeOpen: void;
}

@Directive({
  selector: 'ui5-dialog',
})
export class DialogDirective {
  @Input()
  set draggable(val: DialogElement['draggable']) {
    this.elementRef.nativeElement.draggable = booleanInput(val);
  }
  get draggable() {
    return this.elementRef.nativeElement.hasAttribute('draggable');
  }
  @Input()
  set headerText(val: DialogElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText() {
    return this.elementRef.nativeElement.getAttribute(
      'header-text'
    ) as unknown as DialogElement['headerText'];
  }
  @Input()
  set resizable(val: DialogElement['resizable']) {
    this.elementRef.nativeElement.resizable = booleanInput(val);
  }
  get resizable() {
    return this.elementRef.nativeElement.hasAttribute('resizable');
  }
  @Input()
  set state(val: DialogElement['state']) {
    this.elementRef.nativeElement.state = val;
  }
  get state() {
    return this.elementRef.nativeElement.getAttribute(
      'state'
    ) as unknown as DialogElement['state'];
  }
  @Input()
  set stretch(val: DialogElement['stretch']) {
    this.elementRef.nativeElement.stretch = booleanInput(val);
  }
  get stretch() {
    return this.elementRef.nativeElement.hasAttribute('stretch');
  }
  @Input()
  set accessibleName(val: DialogElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name'
    ) as unknown as DialogElement['accessibleName'];
  }
  @Input()
  set accessibleNameRef(val: DialogElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.getAttribute(
      'accessible-name-ref'
    ) as unknown as DialogElement['accessibleNameRef'];
  }
  @Input()
  set initialFocus(val: DialogElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus() {
    return this.elementRef.nativeElement.getAttribute(
      'initial-focus'
    ) as unknown as DialogElement['initialFocus'];
  }
  @Input()
  set open(val: DialogElement['open']) {
    this.elementRef.nativeElement.open = booleanInput(val);
  }
  get open() {
    return this.elementRef.nativeElement.hasAttribute('open');
  }
  @Input()
  set preventFocusRestore(val: DialogElement['preventFocusRestore']) {
    this.elementRef.nativeElement.preventFocusRestore = booleanInput(val);
  }
  get preventFocusRestore() {
    return this.elementRef.nativeElement.hasAttribute('prevent-focus-restore');
  }

  @Output('after-close') afterClose: Observable<
    CustomEvent<OutputTypes['afterClose']>
  > = new PlaceholderOutput();
  @Output('after-open') afterOpen: Observable<
    CustomEvent<OutputTypes['afterOpen']>
  > = new PlaceholderOutput();
  @Output('before-close') beforeClose: Observable<
    CustomEvent<OutputTypes['beforeClose']>
  > = new PlaceholderOutput();
  @Output('before-open') beforeOpen: Observable<
    CustomEvent<OutputTypes['beforeOpen']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<DialogElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get footer(): DialogElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): DialogElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
