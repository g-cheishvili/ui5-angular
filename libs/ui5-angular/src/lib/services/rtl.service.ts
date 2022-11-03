import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RtlService {
  private _isRtl = new BehaviorSubject(false);

  isRtlChange = this._isRtl.asObservable();

  get isRtl() {
    return this._isRtl.value;
  }

  set isRtl(isRtl: boolean) {
    this._isRtl.next(isRtl);
    document.body.dir = isRtl ? 'rtl' : 'ltr';
  }
}
