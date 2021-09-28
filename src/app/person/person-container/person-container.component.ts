import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-container',
  templateUrl: './person-container.component.html',
  styleUrls: ['./person-container.component.scss']
})
export class PersonContainerComponent implements OnInit {

  constructor(private router: Router) {

  }
  itemFromParent = {}
  getData(item) {
    this.itemFromParent = item
  }
  ngOnInit(): void {
  }

}
