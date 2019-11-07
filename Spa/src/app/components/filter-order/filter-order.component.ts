import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.scss']
})
export class FilterOrderComponent implements OnInit {

  public searchString

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  getOrdersFilter(list){
    this.orderService.getOrdersFilter(list,this.searchString)
  }
  getOrders(){
    this.orderService.getOrders();
  }
}
