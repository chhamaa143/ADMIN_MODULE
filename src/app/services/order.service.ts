import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  viewOrder(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/order/allorders');
  }

  orderDeliveered(id:any){
    let userid=localStorage.getItem('');
    // return this.http.post('https://furniture-v1-app.herokuapp.com/api/order/orderstatus',{orderId:id});
    return this.http.post('http://localhost:3000/api/order/orderstatus',{orderId:id});
  }

  viewOrderHistory(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/order/allOrderHistory');
  }
}
