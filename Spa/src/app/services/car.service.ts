import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface Car{
    RegistrationNumber:string,
    Mark:string,
    Model:string,
    Class:string,
    YearIssue:Date,
    Orders: any
  }

@Injectable({providedIn:'root'})
export class CarService{
    public cars:Car[]=[]

    constructor(private http:HttpClient){}
    
    fetchCars(){
          this.http.get('https://localhost:44311/api/Cars').toPromise().then(cars=>this.cars=cars as Car[])
    }
}