
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Iperson } from './../interface/person'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  @Input() newItem;
  names: string
  persons: Iperson[] = [];
  isSearchableData: boolean = true;
  filterList: Iperson[] = [];
  modalRef: BsModalRef;
  deletePersonId: string

  constructor(
    private http: HttpClient,
    private modalService: BsModalService
  ) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:4000/getAll-person')
      .subscribe((res: Iperson[]) => {
        this.persons = res;
      })
    // ,
    this.filterList = []
  }

  ngOnChanges() {
    this.newItem.search = true
    this.persons.push(this.newItem)
  }
  filterItem() {
    let value = this.names;
    this.http.get(`http://localhost:4000/getAll-person?search=${value}`)
      .subscribe((res: Iperson[]) => {
        this.persons = res;
      })
  }
  openModal(template: TemplateRef<any>, deletePersonId: string) {
    this.modalRef = this.modalService.show(template);
    this.deletePersonId = deletePersonId
  }

  deletePerson() {
    this.http.delete(`http://localhost:4000/delete-person/${this.deletePersonId}`)
      .subscribe((res: Iperson) => {
        this.persons = this.persons.filter(item => item.id != res.id);
        this.modalRef.hide()
      })
  }

}


