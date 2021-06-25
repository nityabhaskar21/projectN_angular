import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(true);
  public readonly loadingS = this._loading.asObservable();

  constructor() {}

  showSpinner() {
    this._loading.next(true);
  }

  hideSpinner() {
    this._loading.next(false);
  }
}
