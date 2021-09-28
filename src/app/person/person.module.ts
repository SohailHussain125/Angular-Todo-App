import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonContainerComponent } from './person-container/person-container.component';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';


@NgModule({
  declarations: [
    CreatePersonComponent,
    PersonDetailComponent,
    PersonContainerComponent,
    PersonListComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [BsModalService]
})
export class PersonModule { }
