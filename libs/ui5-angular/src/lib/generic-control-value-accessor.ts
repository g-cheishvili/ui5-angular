import { Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

interface ValueProviderInterface<ValueType = any> {
  value: ValueType;
  valueUpdatedNotifier$: Observable<any>;
}

@Directive()
export class GenericControlValueAccessor<ValueType = any>
  implements ControlValueAccessor, OnDestroy
{
  onChange!: (val: ValueType) => void;
  onTouched!: () => void;
  private _value?: ValueType;
  private _destroy$ = new Subject<void>();
  private _onChangeSet$ = new BehaviorSubject(false);

  constructor(protected host: ValueProviderInterface<ValueType>) {
    this.host.valueUpdatedNotifier$
      .pipe(
        map(() => this.host.value),
        distinctUntilChanged(),
        tap((v) => (this._value = v)),
        switchMap(this.onChange$),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  onChange$ = (val: ValueType): Observable<ValueType> => {
    return this._onChangeSet$.pipe(
      filter(Boolean),
      tap(() => this.onChange(val)),
      map(() => val)
    );
  };

  registerOnChange(fn: (newVal: ValueType) => void): void {
    this.onChange = fn;
    this._onChangeSet$.next(true);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(val: ValueType): void {
    this._value = val;
    this.host.value = val;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
