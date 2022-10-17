import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-avatar[shell-bar-profile]',
  host: {
    '[attr.slot]': '"profile"',
  },
})
export class ShellBarProfileSlot {}
