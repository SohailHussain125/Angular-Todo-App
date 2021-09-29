import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule ,BsModalService} from 'ngx-bootstrap/modal';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }
