
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Iperson } from '../interface/person';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  formMode = "Create"
  userId = ""
  @Output() getData = new EventEmitter<any>();

  personForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
  })


  onSubmit() {
    this.formMode === "Create" ?
      this.http.post('http://localhost:4000/add-person', this.personForm.value).subscribe((res) => {
        this.getData.emit(res)
        this.personForm.reset();
        this.router.navigateByUrl('/person');
      }) :
      this.http.put(`http://localhost:4000/update-person/${this.userId}`, this.personForm.value).subscribe((res) => {
        this.getData.emit(res)
        this.personForm.reset();
        this.router.navigateByUrl('/person');
      })
  }
  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.userId = this.router.url.split("/")[this.router.url.split("/").length - 1];
    this.formMode = this.userId ? "Update" : "Create";
    this.formMode === "Update" && this.http.get(`http://localhost:4000/getById-person/${this.userId}`)
      .subscribe((res: any) => {
        this.personForm.setValue({
          name: res.name,
          email: res.email,
          mobile: res.mobile,
          age: res.age,
          gender: res.gender,
        })
      })
  }

}
