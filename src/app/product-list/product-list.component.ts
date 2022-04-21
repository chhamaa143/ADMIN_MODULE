import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  i:number =0;
  products:any=[];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  getSerialNo(){
    return ++this.i;
  }

  delete(id:any) {
    this.productService.deleteProduct(id).subscribe(data => {
      window.alert("deleted : ");
    });
  }

}
