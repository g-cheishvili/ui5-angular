import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-avatar[shell-bar-logo]',
  host: {
    '[attr.slot]': '"logo"',
  },
})
export class ShellBarLogoSlot {}
