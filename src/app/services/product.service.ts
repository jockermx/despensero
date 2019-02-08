import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { pathToFileURL } from "url";
import { Product } from "../models/product";

@Injectable()
export class ProductService {
    constructor(public afDB: AngularFireDatabase) {

    }
    public getProduct(productId) {
        return this.afDB.object('product/' + productId);
    }
    public getProducts() {
        return this.afDB.list('product');
    }
    public createProduct(product) {
        return this.afDB.database.ref('/product/' + product.id).set(product);
    }
    public editProduct(product) {
        return this.afDB.database.ref('/product/' + product.id).set(product);
    }
    public deleteProduct(productId) {
        return this.afDB.object('/product/' + productId).remove();
    }

}