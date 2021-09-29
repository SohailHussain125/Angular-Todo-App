import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private productService: ProductService
  ) { }
  file: File = null; // Variable to store file
  isLoading: boolean = false;
  productId: string = "";
  formMode: string = "Add";
  baseUrl;
  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    file: new FormControl(),
  })


  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  // async function Main() {
  //    const file = document.querySelector('#myfile').files[0];
  //    console.log(await toBase64(file));
  // }

  async uploadImage(event) {
    this.file = event.target.files[0];
    this.baseUrl = await this.toBase64(this.file);

  }

  isStringType(val): boolean { return typeof val === 'string'; }

  ngOnInit(): void {
    this.productId = this.router.url.includes("/update/") &&this.router.url.split("/update/")[this.router.url.split("/update/").length - 1];
    console.log(this.productId);
    
    this.productId ? this.formMode = "Update" : ""
    this.productId ? this.productService.getByIdProduct(this.productId).subscribe((res: any) => {
      this.productForm.setValue({
        name: res.name,
        description: res.description,
        price: res.price,
        file: res.image
      });
    }) : ""
    this.productService.modal.subscribe((item)=>console.log(item,">>>From Alert Modal comp."))

  }

  onSubmit() {
    this.isLoading = true
    this.file ? this.productForm.value.file = this.file : ""
    this.formMode === "Add" ?
      this.productService.createProduct(this.productForm.value).subscribe(res => {
        this.isLoading = false
        this.productForm.reset();
        this.router.navigateByUrl('/product')
      }, err => this.isLoading = false
      ) : this.productService.updateProduct(this.productForm.value, this.productId).subscribe(res => {
        this.isLoading = false
        this.productForm.reset();
        this.router.navigateByUrl('/product')
      }, err => this.isLoading = false
      )
  }

}
