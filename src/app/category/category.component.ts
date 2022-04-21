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

  name!: string;
  image!:string;

  selectImage(event:any){
      const file = event.target.files[0];
      this.image=file;
  }

  submit(name: string){
    const formData = new FormData();
    formData.append("image",this.image);
    formData.append("name",name);
    this.categoryService.addCategory(formData).subscribe(data => {
      window.alert("Added Successfully : "+data);
    });
  }

}
