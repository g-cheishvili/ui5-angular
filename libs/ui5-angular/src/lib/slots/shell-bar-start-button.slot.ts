import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-button[shell-bar-start-button]',
  host: {
    '[attr.slot]': '"startButton"',
  },
})
export class ShellBarStartButtonSlot {}
