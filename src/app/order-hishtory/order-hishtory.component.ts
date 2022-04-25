import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-order-hishtory',
  templateUrl: './order-hishtory.component.html',
  styleUrls: ['./order-hishtory.component.css']
})
export class OrderHishtoryComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders:any;
  ngOnInit(): void {
    this.orderService.viewOrderHistory().subscribe(data => {
      this.orders = data;
    });
  }
}


