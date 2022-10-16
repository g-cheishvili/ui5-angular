import {Directive, ElementRef, Input} from "@angular/core";
import '@ui5/webcomponents/dist/Calendar.js';
import {booleanInput} from "../../../../../libs/ui5-angular/src/lib/utils/boolean-input";

@Directive({
  selector: 'ui5-calendar',
})
export class TestDirective {
  @Input()
  set hideWeekNumbers(val: boolean) {
    console.log({val: booleanInput(val)});
    if (booleanInput(val)) {
      this.elementRef.nativeElement.setAttribute('hide-week-numbers', '');
    } else {
      this.elementRef.nativeElement.removeAttribute('hide-week-numbers');
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log('test');
  }
}
