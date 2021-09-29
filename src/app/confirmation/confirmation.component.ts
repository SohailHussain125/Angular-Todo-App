import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: BsModalService,

  ) { }

  ngOnInit(): void {
  

    this.productService.modal.subscribe((item) => {
      console.log(item);
      
      item.open ?
      this.modalService.show(item.template) :
      this.modalService.hide()
    }
    )
    this.productService.flag.subscribe((item) => console.log(item))
    this.productService.flag2.subscribe((item)=>console.log(item,"observable"))

  }


}
