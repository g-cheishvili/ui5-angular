import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents/dist/Toast.js';
interface ToastElement {
  duration: any;
  placement:
    | 'BottomCenter'
    | 'BottomEnd'
    | 'BottomStart'
    | 'MiddleCenter'
    | 'MiddleEnd'
    | 'MiddleStart'
    | 'TopCenter'
    | 'TopEnd'
    | 'TopStart';

  // Slots
}

@Directive({
  selector: 'ui5-toast',
})
export class ToastDirective {
  @Input()
  set duration(val: ToastElement['duration']) {
    this.elementRef.nativeElement.duration = val;
  }
  get duration() {
    return this.elementRef.nativeElement.getAttribute(
      'duration'
    ) as unknown as ToastElement['duration'];
  }
  @Input()
  set placement(val: ToastElement['placement']) {
    this.elementRef.nativeElement.placement = val;
  }
  get placement() {
    return this.elementRef.nativeElement.getAttribute(
      'placement'
    ) as unknown as ToastElement['placement'];
  }

  constructor(private elementRef: ElementRef<ToastElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
