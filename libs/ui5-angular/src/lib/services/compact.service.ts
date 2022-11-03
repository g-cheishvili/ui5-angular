import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompactService {
  private _isCompact$ = new BehaviorSubject(false);

  isCompactChange = this._isCompact$.asObservable();

  get isCompact(): boolean {
    return this._isCompact$.value;
  }

  set isCompact(value: boolean) {
    this._isCompact$.next(value);
    if (value) {
      document.body.classList.add('ui5-content-density-compact');
    } else {
      document.body.classList.remove('ui5-content-density-compact');
    }
  }
}
