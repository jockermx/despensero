import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.page.html',
  styleUrls: ['./newproduct.page.scss'],
})
export class NewproductPage {
  product: any = {};
  productId: number = null;
  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {
    //this.product = navParams.get('product');
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId !== 0) {
      console.log("tirado peticion ... ... ...");
      this.productService.getProduct(this.productId).valueChanges().subscribe( (productFB) => {
        console.log(productFB);
        this.product = productFB;
      });
      //this.product = this.productService.getProduct(this.productId);
    } else {
      console.log("nuevo registro ... ... ...");
    }
    
  }

  saveProduct() {
    if (this.productId === 0) {
      this.product.id = Date.now();
    }
    console.log(this.product.id);
    this.productService.createProduct(this.product);
    console.log(this.product);
  }
}
