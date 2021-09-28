import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  products;

  ngOnInit(): void {
    this.http.get('http://localhost:4000/getAll-product')
      .subscribe((res) => {
        this.products = res;
      })
  }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  onMoreDetail(item: any) {
    this.route.navigate([`/product/detail`], { queryParams: { productId: item.id } })
  }


}
