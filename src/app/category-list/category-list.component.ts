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
  ngOnInit(): void {
    this.categoryService.viewCategory().subscribe(data => {
      this.categories=data;
    })
  }

  delete(id:any){
    this.categoryService.deleteCategory(id).subscribe(data => {
      window.alert("Ctaegory Deleted....");
      this.ngOnInit();
    })
  }

  edit(id:any){
    console.log("edit : "+id);
  }

}
