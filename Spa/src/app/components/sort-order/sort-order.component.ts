import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-sort-order',
  templateUrl: './sort-order.component.html',
  styleUrls: ['./sort-order.component.scss']
})
export class SortOrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  sortAsc(){
    this.orderService.sortOrdersByDateAsc()
  }
  sortDesc(){
    this.orderService.sortOrdersByDateDesc()
  }

}
