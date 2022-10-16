import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Dialog.js';
interface DialogElement extends HTMLElement {
  draggable: boolean;
  headerText: string;
  resizable: boolean;
  state: any;
  stretch: boolean;

  // Slots
  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-dialog',
})
export class DialogDirective {
  @Input()
  set draggable(val: DialogElement['draggable']) {
    this.elementRef.nativeElement.draggable = val;
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
    this.elementRef.nativeElement.resizable = val;
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
    this.elementRef.nativeElement.stretch = val;
  }
  get stretch() {
    return this.elementRef.nativeElement.hasAttribute('stretch');
  }

  constructor(private elementRef: ElementRef<DialogElement>) {}

  get element(): DialogElement {
    return this.elementRef.nativeElement;
  }

  get footer(): DialogElement['footer'] {
    return this.elementRef.nativeElement.footer;
  }

  get header(): DialogElement['header'] {
    return this.elementRef.nativeElement.header;
  }
}
