import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  products: any = [];
  productsList: any = [];
  constructor(
    public productService: ProductService
  ) {

  }

  ngOnInit() {
    this.productService.getProducts().valueChanges()
    .subscribe( (productsFB) => {
      //console.log(productsFB);
      this.products = productsFB;
    });
  }

  getItems(searchbar) {
    // set q to the value of the searchbar
    const request = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!request) {
      this.productsList = this.products;
      return;
    }

    this.productsList = this.products.filter((v) => {
      if (v.name && request) {
        if (v.name.toLowerCase().indexOf(request.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  console.log(request, this.productsList.length);

  }

}
