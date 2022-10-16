import { Observable } from 'rxjs';

export class PlaceholderOutput<T = any> extends Observable<T> {
  constructor() {
    super((observer) => {
      observer.complete();
    });
  }
}
