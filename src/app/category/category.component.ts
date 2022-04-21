import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }


  image!:string;
  selectImage(event:any){
    const file = event.target.files[0];
    this.image = file;
  }

  submit(catName:string){
    const formData = new FormData();
    console.log(catName+"  "+this.image);;
    formData.append("name",catName);
    formData.append("image",this.image);
    this.categoryService.addCategory(formData).subscribe(data => {
      window.alert("ctaegory added..");
    });
  }
}
