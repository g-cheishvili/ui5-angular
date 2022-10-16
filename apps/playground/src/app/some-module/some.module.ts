import {NgModule} from "@angular/core";
import {TestDirective} from "./test.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [TestDirective],
  exports: [TestDirective]
})
export class SomeModule {
}
