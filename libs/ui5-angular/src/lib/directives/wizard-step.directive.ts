import { Directive, ElementRef, Input } from '@angular/core';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/WizardStep.js';
interface WizardStepElement {
  branching: BooleanInputType;
  disabled: BooleanInputType;
  icon: string;
  selected: BooleanInputType;
  subtitleText: string;
  titleText: string;

  // Slots
}

@Directive({
  selector: 'ui5-wizard-step',
})
export class WizardStepDirective {
  @Input()
  set branching(val: WizardStepElement['branching']) {
    this.elementRef.nativeElement.branching = booleanInput(val);
  }
  get branching() {
    return this.elementRef.nativeElement.hasAttribute('branching');
  }
  @Input()
  set disabled(val: WizardStepElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: WizardStepElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.icon;
  }
  @Input()
  set selected(val: WizardStepElement['selected']) {
    this.elementRef.nativeElement.selected = booleanInput(val);
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set subtitleText(val: WizardStepElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.subtitleText;
  }
  @Input()
  set titleText(val: WizardStepElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.titleText;
  }

  constructor(
    private elementRef: ElementRef<WizardStepElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }
}
