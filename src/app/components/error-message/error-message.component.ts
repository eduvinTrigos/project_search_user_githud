import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ErrorServiceService } from '../../error-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  @Input() message: string = '';
  @Input() error: boolean = false;
  @Output() closeEvent = new EventEmitter();

  visible: boolean = true;
  errorMessage: string = '';
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
    this.visible = false;
    this.closeEvent.emit();
  }
}
