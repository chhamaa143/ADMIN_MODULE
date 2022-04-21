import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users:any=[];
  ngOnInit(): void {
    this.userService.viewUsers().subscribe(data=>{
      this.users=data;
    });
  }

  delete(id:any){
    this.userService.deleteUser(id).subscribe(data=>{
      window.alert("deleted successfully");
      this.ngOnInit();
    })
  }

}
