import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  @Input() itemsList: any;
  @Input() type: string;

  @Output() addToMyListCallBack: EventEmitter<any> = new EventEmitter<any>();

  public showItem = false;
  public showIndex;

  constructor() { }

  ngOnInit() {
  }

  /** to display button and editable input on hovering item */
  onMouseOver(index, type) {
    this.showItem = true;
    this.showIndex = index;
  }

  /** to hide button and editable input on leaving item */
  onMouseLeave(type) {
    this.showItem = false;
  }

  /** to remove item from the list(called only on click of my list items) */
  removeFromMyList(index) {
    this.itemsList.splice(index, 1);
  }

  /** to add item to the list(called only on click of recommended list items) */
  addToMyList(item) {
    /** emits the event to the parent by passing the selected item */
    this.addToMyListCallBack.emit(item);
  }

}
