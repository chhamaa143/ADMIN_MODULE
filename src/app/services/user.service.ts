import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl1="https://furniture-v1-app.herokuapp.com/api/admin/signin";
  constructor(private http:HttpClient) { }

  viewUsers(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/user/view');
  }

  deleteUser(id:any){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/user/view'+id); 
  }
  adminSignIn(email:any,password:any){
    return this.http.post<any>(this.apiurl1,{email:email,password:password});
  }
  checkTokenAdmin():Boolean{
    return !!localStorage.getItem('jwt-token2');
  }
}
