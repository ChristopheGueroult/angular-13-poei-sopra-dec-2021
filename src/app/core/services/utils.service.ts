import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public bigSize$: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() {}
  public biggerSize() {
    this.bigSize$.next(true);
  }
  public normalSize() {
    this.bigSize$.next(false);
  }
}
