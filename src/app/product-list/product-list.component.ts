import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products:any=[]
  ngOnInit(): void {
    this.productService.viewProducts().subscribe(data => {
      this.products=data;
    });
  }

  delete(id:any){
    this.productService.deleteProduct(id).subscribe(data=>{
      window.alert("Deleted Successfully...");
      this.ngOnInit();
    });
  }

}
