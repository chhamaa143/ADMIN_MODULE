import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './signin/signin.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { QueryComponent } from './query/query.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmiComponent } from './emi/emi.component';
import { EmiHishtoryComponent } from './emi-hishtory/emi-hishtory.component';
import { OrderHishtoryComponent } from './order-hishtory/order-hishtory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    CategoryComponent,
    CategoryListComponent,
    ProductComponent,
    ProductListComponent,
    PageNotFoundComponent,
    HomeComponent,
    OrderComponent,
    QueryComponent,
    CustomerListComponent,
    EmiComponent,
    EmiHishtoryComponent,
    OrderHishtoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
