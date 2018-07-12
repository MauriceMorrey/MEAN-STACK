import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"]
})
export class ShowComponent implements OnInit {
  product;
  id;

  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params["id"];
      console.log("The id is", params["id"]);
    });
    this._productsService.showProduct(this.id).subscribe(data => {
      console.log("data", data["product"]);
      console.log("data", data);
      if (data["status"] === "success") {
        console.log("data", data);
        this.product = data["product"];
        console.log(this.product);
      } else {
        this._router.navigate(["/"]);
      }
    });
  }
}
