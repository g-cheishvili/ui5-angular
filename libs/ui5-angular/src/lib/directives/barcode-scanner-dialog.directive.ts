import { Directive, ElementRef, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
interface BarcodeScannerDialogElement {
  // Slots
}

interface OutputTypes {
  scanError: { message: string };

  scanSuccess: { text: string; rawBytes: Record<string, any> };
}

@Directive({
  selector: 'ui5-barcode-scanner-dialog',
})
export class BarcodeScannerDialogDirective {
  @Output('scan-error') scanError: Observable<
    CustomEvent<OutputTypes['scanError']>
  > = new PlaceholderOutput();
  @Output('scan-success') scanSuccess: Observable<
    CustomEvent<OutputTypes['scanSuccess']>
  > = new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<BarcodeScannerDialogElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
