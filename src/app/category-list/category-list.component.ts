import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories:any=[];
  i:number = -10;
  ngOnInit(): void {
        this.categoryService.getAllCategories().subscribe(data=>{
        this.categories = data;
      })
    }

    getSerialNo(){
      return this.i++;
    }

    delete(id:any){
      this.categoryService.deleteCategory(id).subscribe(data =>{
        window.alert("deleted");
      });
    }
}
