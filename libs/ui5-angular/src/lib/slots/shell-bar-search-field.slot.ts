import { Directive } from '@angular/core';

@Directive({
  selector: 'ui5-input[shell-bar-search-field]',
  host: {
    '[attr.slot]': '"searchField"',
  },
})
export class ShellBarSearchFieldSlot {}
