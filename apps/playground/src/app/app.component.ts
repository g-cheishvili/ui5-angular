import { Component } from '@angular/core';
import '@ui5/webcomponents/dist/Calendar.js';

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';

  changeHandler($event: { detail: { values: Array<any>; dates: Array<any> } }) {
    console.log($event.detail)
  }
}
