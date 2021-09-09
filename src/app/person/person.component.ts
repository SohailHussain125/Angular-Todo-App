import { Component, OnInit, Input } from '@angular/core';
import { Iperson } from './interface/person'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  name = "sasadsadasd";
  @Input() newItem;

  persons: Iperson[] = [];
  constructor() { }
  ngOnInit(): void {
    this.persons = []
  }

  ngOnChanges() {
    this.persons.push(this.newItem)
  }
}
