import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  getData(item) {
    this.itemFromParent = item
  }
  // newItem = "dkasdksjh"
  itemFromParent = {}

  name = "Sohail"
  title = 'LearningAngular';
}
