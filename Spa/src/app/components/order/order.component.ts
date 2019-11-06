import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private searchString:string=''

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
  }

  getOrdersByName(){
    this.orderService.getOrdersByUserName(this.searchString)
  }
  removeOrder(idOrder:number){
    this.orderService.onRemove(idOrder)
  }
}
