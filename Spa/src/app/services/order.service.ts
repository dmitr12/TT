import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

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
    getOrdersByUserName(search){
        this.http.get('https://localhost:44311/api/Orders/username/'+search).toPromise().then(orders=>this.orders=orders as Order[])
    }
    onRemove(idOrder:number){
        this.orders=this.orders.filter(order=>order.IdOrder!==idOrder)
        this.http.delete('https://localhost:44311/api/Orders/'+idOrder).toPromise().then(orders=>this.orders=orders as Order[])
    }
}