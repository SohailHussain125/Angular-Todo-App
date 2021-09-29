import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared-module/alert-modal/alert-modal.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;
  private alertModal: AlertModalComponent;
  modalRef: BsModalRef;
  deleted: any;

  @ViewChild('modelTemplate') modelTemplate: TemplateRef<any>; 
  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private route: Router,
    private productService: ProductService

  ) {}


  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => this.products = res)
  }

  onUpdate(_id) {
    this.route.navigateByUrl(`/product/update/${_id}`)
  }
  onHide() {
    this.productService.modal.next({'open':false, template: this.modelTemplate})

    // this.modalService.hide();
  }

  onDelete(template: TemplateRef<any>, _id) {
    
    this.productService.modal.next({'open':true, template: this.modelTemplate})
    // this.modalService.show(template);
    // this.deleted = _id
  }

  onConfirm() {
    this.productService.deleteProduct(this.deleted)
      .subscribe((res: any) => {
        this.products = this.products.filter(item => item._id != res._id)
        this.onHide()
      })
  }
  onMoreDetail(item: any) {
    this.route.navigate([`/product/detail/${item._id}`])
  }
 
}
