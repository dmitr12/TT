import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from 'src/app/services/order.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public changeRowId:number=-1

  constructor(private orderService:OrderService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.orderService.getOrders()
  }
  removeOrder(idOrder:number){
    this.orderService.onRemove(idOrder)
  }
  setChangeRowId(IdOrder){
    this.changeRowId=IdOrder
  }
  changeOrder(order){
    this.orderService.changeOrder(order).subscribe(res=>{
      console.log("good!")
      this.orderService.getOrders();
    },
    error=>{
      console.log(error)
    })
  }
}
