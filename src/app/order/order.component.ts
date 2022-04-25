import { Component, OnInit } from '@angular/core';
import { windowToggle } from 'rxjs';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders:any;
  ngOnInit(): void {
    this.orderService.viewOrder().subscribe(data => {
      this.orders = data;
    });
  }

  deliver(id:any){
    this.orderService.orderDeliveered(id).subscribe(data => {
      window.alert("orderDeliveered....");
      this.ngOnInit();
    });
  }

}
