import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  private errorMessage = new Subject<string>();
  errorMessage$ = this.errorMessage.asObservable();

  showError(message: string) {
    this.errorMessage.next(message);
  }
}
