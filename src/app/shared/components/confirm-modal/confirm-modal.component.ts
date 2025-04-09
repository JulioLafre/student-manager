// src/app/shared/components/confirm-modal/confirm-modal.component.ts
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  title = '';
  message = '';

  constructor(public activeModal: NgbActiveModal) { }

  confirm(): void {
    this.activeModal.close('confirm');
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }
}