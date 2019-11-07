import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  public form

  constructor(private orderService:OrderService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form=this.formBuilder.group(
      {
        NumberDriverLicense:[''],
        RegistrationNumber:[''],
        StartDateHire:[''],
        EndDateHire:[''],
        Comment:[''],
        NumberDriverLicenseNavigation:null,
        RegistrationNumberNavigation:null
      }
    )
  }
  onSubmit(value:any)
  {
    this.orderService.addOrder(value).subscribe(
      res => {
        this.orderService.getOrders();
      }
    )
  }

}
