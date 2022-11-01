import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RtlService {
  private _isRtl$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this._isRtl$.subscribe((isRtl) => {
      document.body.dir = isRtl ? 'rtl' : 'ltr';
    });
  }

  setRtl(isRtl: boolean) {
    this._isRtl$.next(isRtl);
  }
}
