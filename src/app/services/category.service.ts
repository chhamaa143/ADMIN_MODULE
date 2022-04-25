
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

  }

  viewCategory(){
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/category/view');

  }

  deleteCategory(id:any) {
    return this.http.get('https://furniture-v1-app.herokuapp.com/api/category/delete/'+id);
  }

  addCategory(formData:FormData) {
    //return this.http.post('https://furniture-v1-app.herokuapp.com/api/category/add',{formData});
    console.log(formData);
    return this.http.post('http://localhost:3000/api/category/add',formData);
  }

}
