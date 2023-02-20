import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ErrorServiceService } from '../../error-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  error: boolean = false;
  errorMessageSubscription!: Subscription;

  constructor(private errorService: ErrorServiceService) {}

  ngOnInit() {
    this.errorMessageSubscription = this.errorService.errorMessage$.subscribe(
      errorMessage => {
        this.errorMessage = errorMessage;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }

  close() {
    this.error = false;
    this.errorMessage = '';
  }
}
