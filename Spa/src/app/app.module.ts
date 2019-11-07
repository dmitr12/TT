import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { FilterOrderComponent } from './components/filter-order/filter-order.component';
import { SortOrderComponent } from './components/sort-order/sort-order.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    AddOrderComponent,
    FilterOrderComponent,
    SortOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
