import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';



@NgModule({
  declarations: [ProductListComponent, CreateProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
