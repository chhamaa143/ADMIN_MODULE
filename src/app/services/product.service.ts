import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/product/view');
  }

  deleteProduct(id:any) {
     return this.http.get('https://furniture-v1-app.herokuapp.com/api/product/delete/'+id);
  }

  addProduct(formData:FormData) {
    return this.http.post("https://furniture-v1-app.herokuapp.com/api/product/add",formData);
    
  }
}
