import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export interface Order{
    IdOrder: number,
    NumberDriverLicense: string,
    RegistrationNumber:string,
    StartDateHire:Date,
    EndDateHire:Date,
    Comment:string,
    NumberDriverLicenseNavigation:any,
    RegistrationNumberNavigation:any
}

@Injectable({providedIn:'root'})
export class OrderService{
    public orderCounter=0
    public orders:Order[]=[]
    constructor(private http:HttpClient){}

    getOrders(){
        this.http.get('https://localhost:44311/api/Orders').toPromise().then(orders=>this.orders=orders as Order[])
    }
    getOrdersFilter(list,search){
        this.http.get('https://localhost:44311/api/Orders/'+list.value+'/'+search).toPromise().then(orders=>this.orders=orders as Order[])
    }
    onRemove(idOrder:number){
        return this.http.delete('https://localhost:44311/api/Orders/'+idOrder)
    }
    addOrder(component:FormGroup){
       return this.http.post('https://localhost:44311/api/Orders',component)
    }
    changeOrder(order){
        return this.http.put('https://localhost:44311/api/Orders/'+order.IdOrder,order)
    }
    sortOrdersByStartDate()
    {
        if (this.orderCounter === 0) 
           this.sortOrdersByStartDateAsc();
        if (this.orderCounter === 1) 
           this.sortOrdersByStartDateDesc(); 
        if (this.orderCounter === 2) {
            this.getOrders();
            this.orderCounter = 0;
          } 
        else {
            this.orderCounter++;
          }
    }
    sortOrdersByEndDate()
    {
        if (this.orderCounter === 0) 
           this.sortOrdersByEndDateAsc();
        if (this.orderCounter === 1) 
           this.sortOrdersByEndDateDesc(); 
        if (this.orderCounter === 2) {
            this.getOrders();
            this.orderCounter = 0;
          } 
        else {
            this.orderCounter++;
          }
    }
    sortOrdersByStartDateAsc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.StartDateHire>dateS.StartDateHire)
                return 1;
            if(dateF.StartDateHire<dateS.StartDateHire)
                return -1;
            return 0;
        })
    }
    sortOrdersByStartDateDesc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.StartDateHire>dateS.StartDateHire)
                return -1;
            if(dateF.StartDateHire<dateS.StartDateHire)
                return 1;
            return 0;
        })
    }
    sortOrdersByEndDateAsc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.EndDateHire>dateS.EndDateHire)
                return 1;
            if(dateF.EndDateHire<dateS.EndDateHire)
                return -1;
            return 0;
        })
    }
    sortOrdersByEndDateDesc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.EndDateHire>dateS.EndDateHire)
                return -1;
            if(dateF.EndDateHire<dateS.EndDateHire)
                return 1;
            return 0;
        })
    }
}