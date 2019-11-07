import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  {path:'',component:OrderComponent},
  {path:'users',component:UserComponent},
  {path:'cars',component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
