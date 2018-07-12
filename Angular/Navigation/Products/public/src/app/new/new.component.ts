import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newProduct: any;
  title: string;
  price: number;
  image_url: string;

  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params["id"]));
    this.newProduct = { title: "", price: "", image_url: "" };
  }

  onSubmit(form) {
    console.log(`Looks like we're submitting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    console.log("this is the new Product", this.newProduct);
    if(form.valid){
      let observable = this._productsService.postProducts(this.newProduct);
      observable.subscribe(data => {
        console.log("Posted our product!", data);
      });

      this.newProduct = { title: "", price: "", image_url: "" };
      this._router.navigate(["/product"]);
    }


    // this.getProductsFromService();
  }
}
