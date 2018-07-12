import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [];
  product;
  productToEdit: any;

  constructor(private _productsService: ProductsService){}

  ngOnInit() {
    this.getProductsFromService()
  }

  getProductsFromService() {
    let observable = this._productsService.getProducts();
    observable.subscribe(data => {
      console.log("Got our products!", data);
      // In this example, the array of products is assigned to the key 'products' in the data object.
      // This may be different for you, depending on how you set up your Product API.
      this.products = data["products"];
    });
  }

  oneProduct(product) {
    let observable = this._productsService.showProduct(product);
    observable.subscribe(data => console.log("Showed our product!", data),
  );
  this.product = product //might need to fix this
  }

  deleteProductFromService(id) {
    console.log(`We're now deleting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._productsService.deleteProduct(id);
    observable.subscribe(data => console.log("Deleted our product!", data));
    this.getProductsFromService();
  }

}
