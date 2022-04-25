import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  constructor(private  http:HttpClient) { }

  viewEmis(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/emi/adminallemi');
  }

  payEmi(id:any){
    return this.http.post('https://furniture-v1-app.herokuapp.com/api/emi/emiupdate/'+id,{});
  }

  viewEmisHistory(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/emi/adminhistoryemi');
  }
}
