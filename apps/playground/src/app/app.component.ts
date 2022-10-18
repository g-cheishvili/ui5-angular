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

  changeHandler($event: string) {
    console.log($event)
  }
}
