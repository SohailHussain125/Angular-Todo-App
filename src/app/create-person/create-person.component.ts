
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  @Output() getData = new EventEmitter<Event>();

  personForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
  })


  onSubmit() {
    this.getData.emit(this.personForm.value);
    this.personForm.reset()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
