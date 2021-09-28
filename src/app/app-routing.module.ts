import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'/',pathMatch:'full'},
  {
    path: "person", loadChildren: () => import("./person/person.module").then(m => m.PersonModule)
  },
  {
    path: "product", loadChildren: () => import("./product/product.module").then(m => m.ProductModule)
  },
  {
    path: "", loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "**",
    redirectTo: "/",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
