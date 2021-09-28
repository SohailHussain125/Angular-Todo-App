import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item;
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Input() isActionButton: boolean = true;
  @Output() moreDetail = new EventEmitter<any>();


  constructor() { }
  cardItem: any;

  ngOnInit(): void {
    this.cardItem = this.item;
  }
  onDeleteCard(id) {
    this.onDelete.emit(id);
  }
  onUpdateCard() {
    this.onUpdate.emit()
  }

  onMoreDetail(item: any) {
    this.moreDetail.emit(item)
  }

}
