import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmiHishtoryComponent } from './emi-hishtory/emi-hishtory.component';
import { EmiComponent } from './emi/emi.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { QueryComponent } from './query/query.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'add-category',component:CategoryComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'add-product',component:ProductComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'order-list',component:OrderComponent},
  {path:'Query',component:QueryComponent},
  {path:'Customer-list',component:CustomerListComponent},
  {path:'Emi',component:EmiComponent},
  {path:'emi-hishtory',component:EmiHishtoryComponent},
  {path:'**',component:PageNotFoundComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
