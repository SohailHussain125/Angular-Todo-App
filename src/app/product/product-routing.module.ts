import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../foo-guard.service';
import { FooResolveService } from '../foo-resolve.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  {
    path: "create",
    component: CreateProductComponent,
  },
  {
    path: "update/:id",
    component: CreateProductComponent,
  },
  {
    path: "detail/:productId",
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    resolve: {
      movie: FooResolveService
    }
  },
  {
    path: "",
    component: ProductListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
