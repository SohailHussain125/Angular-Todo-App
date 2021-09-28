import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit, AfterViewInit {
  modalRef: BsModalRef;
  deleteId: string;
  @Input() message;
  @Input() title;
  @Output() onHide = new EventEmitter<any>();
  @Output() onConfirm = new EventEmitter<any>();



  @ViewChild('template') modalTemplate: TemplateRef<any>;
  modalMessage: any;
  modalTitle: any;
  constructor(
    private modalService: BsModalService

  ) { }

  openModal() {
    // this.modalRef = this.modalService.show(this.modalTemplate);
  }

  onConfirmFunc() {
    this.onConfirm.emit()
  }

  onHdeFunc() {
    this.onHide.emit()
  }

  ngOnInit(): void {
    this.modalMessage = this.message;
    this.modalTitle = this.title;
  }

  ngAfterViewInit() {
    // this.openModal();
  }
  ngOnChange(e) {

  }


}
