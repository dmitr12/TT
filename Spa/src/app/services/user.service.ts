import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {tap} from 'rxjs/operators';

export interface User{
    NumberDriverLicense:string,
    Firstname:string,
    Name:string,
    DateBirth:Date,
    Orders: any
  }

@Injectable({providedIn:'root'})
export class UserService{
    public users:User[]=[]

    constructor(private http:HttpClient){}
    
    fetchUsers(){
          this.http.get('https://localhost:44311/api/Users').toPromise().then(users=>this.users=users as User[])
    }
}