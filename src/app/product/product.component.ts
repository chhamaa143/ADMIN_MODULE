import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  image!: any;

  selectImage(event:any){
    console.log("insile file");
      const file = event.target.files[0];
      console.log(file);
      this.image=file;
  }

  submit(name: string,price: any,discount:any,description:string,offers:string,catId:string,quantity:any){
    const formData = new FormData();
    formData.append("pImage",this.image);
    formData.append("pName",name);
    formData.append("pPrice",price);
    formData.append("pDiscount",discount);
    formData.append("pDescription",description);
    formData.append("pOffers",offers);
    formData.append("catId",catId);
    formData.append("pQuantity",quantity);
    console.log(name+"  "+this.image+" "+price+" "+discount+" "+description+" "+offers+" "+catId+" "+quantity);
    this.productService.addProduct(formData).subscribe(data => {
      if(data)
        window.alert("added");
      else
        window.alert("failed");
    });
  }

}
