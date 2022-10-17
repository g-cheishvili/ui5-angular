import { Directive, ElementRef, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import '@ui5/webcomponents-fiori/dist/Wizard.js';
interface WizardElement {
  // Slots
}

interface OutputTypes {
  stepChange: {
    step: HTMLElement;
    previousStep: HTMLElement;
    changeWithClick: boolean;
  };
}

@Directive({
  selector: 'ui5-wizard',
})
export class WizardDirective {
  @Output('step-change') stepChange: Observable<
    CustomEvent<OutputTypes['stepChange']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<WizardElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
