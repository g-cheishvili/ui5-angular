import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/WizardStep.js';
interface WizardStepElement extends HTMLElement {
  branching: boolean;
  disabled: boolean;
  icon: string;
  selected: boolean;
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
    this.elementRef.nativeElement.branching = val;
  }
  get branching() {
    return this.elementRef.nativeElement.hasAttribute('branching');
  }
  @Input()
  set disabled(val: WizardStepElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set icon(val: WizardStepElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon() {
    return this.elementRef.nativeElement.getAttribute(
      'icon'
    ) as unknown as WizardStepElement['icon'];
  }
  @Input()
  set selected(val: WizardStepElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected() {
    return this.elementRef.nativeElement.hasAttribute('selected');
  }
  @Input()
  set subtitleText(val: WizardStepElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.getAttribute(
      'subtitle-text'
    ) as unknown as WizardStepElement['subtitleText'];
  }
  @Input()
  set titleText(val: WizardStepElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.getAttribute(
      'title-text'
    ) as unknown as WizardStepElement['titleText'];
  }

  constructor(private elementRef: ElementRef<WizardStepElement>) {}

  get element(): WizardStepElement {
    return this.elementRef.nativeElement;
  }
}
