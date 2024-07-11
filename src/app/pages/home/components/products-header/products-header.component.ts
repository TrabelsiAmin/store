import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort= 'desc';
  itemShowCount=12;
  constructor() {}
  ngOnInit():void {}

  onsortupdate(newSort: string):void {
    this.sort = newSort;
  }

  onItemsUpdate(count: number):void {
    this.itemShowCount = count;
  }
  onColumsUpdate(colsNum: number):void {
    this.columnsCountChange.emit(colsNum);
}
}
