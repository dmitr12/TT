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
    public orders:Order[]=[]
    constructor(private http:HttpClient){}

    getOrders(){
        this.http.get('https://localhost:44311/api/Orders').toPromise().then(orders=>this.orders=orders as Order[])
    }
    getOrdersFilter(list,search){
        this.http.get('https://localhost:44311/api/Orders/'+list.value+'/'+search).toPromise().then(orders=>this.orders=orders as Order[])
    }
    onRemove(idOrder:number){
        this.orders=this.orders.filter(order=>order.IdOrder!==idOrder)
        this.http.delete('https://localhost:44311/api/Orders/'+idOrder).toPromise().then(orders=>this.orders=orders as Order[])
    }
    addOrder(component:FormGroup){
       return this.http.post('https://localhost:44311/api/Orders',component)
    }
    changeOrder(order){
        return this.http.put('https://localhost:44311/api/Orders/'+order.IdOrder,order)
    }
    sortOrdersByDateAsc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.StartDateHire>dateS.StartDateHire)
                return 1;
            if(dateF.StartDateHire<dateS.StartDateHire)
                return -1;
            return 0;
        })
    }
    sortOrdersByDateDesc(){
        this.orders=this.orders.sort((dateF,dateS)=>
        {
            if(dateF.StartDateHire>dateS.StartDateHire)
                return -1;
            if(dateF.StartDateHire<dateS.StartDateHire)
                return 1;
            return 0;
        })
    }
}