import {Component, ViewChild} from '@angular/core';
import '@ui5/webcomponents/dist/Calendar.js';
import {MultiComboBoxDirective} from "ui5-angular";

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

  changeHandler($event: string) {
    console.log($event)
  }
}
