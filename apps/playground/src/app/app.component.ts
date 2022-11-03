import {Component, ViewChild} from '@angular/core';
import '@ui5/webcomponents/dist/Calendar.js';
import {CompactService, MultiComboBoxDirective, RtlService} from "ui5-angular";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  @ViewChild(MultiComboBoxDirective)
  multiComboBox!: MultiComboBoxDirective;
  someInputVal!: string;
  rangeSliderValue = {startValue: 1, endValue: 10};
  isCompact = false;

  constructor(private rtlService: RtlService, private compactService: CompactService) {
  }

  changeHandler($event: string) {
    this.rtlService.isRtl = ($event === 'rtl');
  }

  setCompact(b: boolean) {
    this.isCompact = b;
    this.compactService.isCompact = b;
  }
}
