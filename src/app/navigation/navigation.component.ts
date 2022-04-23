import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private data:UserService,private router:Router) { }
  ngOnInit(): void {
  }
  logoutadmin(){
    localStorage.removeItem('jwt-token2');
    this.router.navigate(['/logout']);
  }
  isLoggedInAdmin():Boolean{
    if(this.data.checkTokenAdmin())
      return true;
    
    return false;
  }
}