import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  viewUsers(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/user/view');
  }

  deleteUser(id:any){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/user/view'+id); 
  }
}
