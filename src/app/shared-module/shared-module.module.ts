import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SpinnerComponent, CardComponent, AlertModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule
  ],
  providers: [BsModalService],

  exports: [SpinnerComponent, CardComponent, AlertModalComponent]
})
export class SharedModuleModule { }
