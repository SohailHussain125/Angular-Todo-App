import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonContainerComponent } from './person-container/person-container.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


const routes: Routes = [
  {
    path: "detail",
    component: PersonDetailComponent,
  },
  {
    path: "create",
    component: CreatePersonComponent,
  },
  {
    path: "edit/:id",
    component: CreatePersonComponent,
  },

  {
    path: "",
    component: PersonContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonRoutingModule { }
