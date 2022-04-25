import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,private categoryService:CategoryService) { }

  categories: any;
  ngOnInit(): void {
    this.categoryService.viewCategory().subscribe(data => {
      this.categories = data;
    });
  }

  image!: any;

  productName!: any;
  productPrice!: any;
  productDescription!: any;
  productOffer!: any;
  catId!: any;
  productQuantity!: any;
  productDiscount!: any;

  selectImage(event:any){
    console.log("insile file");
      const file = event.target.files[0];
      console.log(file);
      this.image=file;
  }

  addProduct(){
    const formData=new FormData();
    formData.append("pName",this.productName);
    formData.append("pPrice",this.productPrice);
    formData.append("pDescription",this.productDescription);
    formData.append("pOffers",this.productOffer);
    formData.append("catId",this.catId);
    formData.append("pQuantity",this.productQuantity);
    formData.append("pDiscount",this.productDiscount);
    formData.append("pImage",this.image);
    this.productService.addProduct(formData).subscribe(data => {
      window.alert("Product added...");
    });
  }

}
