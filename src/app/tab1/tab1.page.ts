import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { NewproductPage } from '../newproduct/newproduct.page';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  products: any = [];
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public alertController: AlertController,
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

  newProduct() {
    //navegar sobre la traza "navigateForward"
    //link a otra pagina "navigateRoot"
    this.router.navigate(['/newproduct/', 0]);
  }

  editProduct(product) {
    this.router.navigate(['/newproduct/', product.id]);
  }

  async deleteProduct(productId) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.productService.deleteProduct(productId);
          }
        }
      ]
    });

    await alert.present();
  }
}
