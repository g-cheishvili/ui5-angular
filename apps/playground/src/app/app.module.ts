import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Ui5AngularModule} from "ui5-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ui5AngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
