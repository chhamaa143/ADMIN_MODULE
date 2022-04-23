import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email1: any;
  password1: any;
  constructor(private data: UserService, private router: Router) { }
  adminformdata() {
    this.data.adminSignIn(this.email1, this.password1).subscribe(
      data1 => {
        if (data1) {
          alert('SignUp Success');
          console.log(data1);
          this.router.navigate(['/category-list']);
          localStorage.setItem('jwt-token2',data1.token);
        }
        else {
          alert('SignUp Failed');
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
