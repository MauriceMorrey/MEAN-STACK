import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Products";

  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}
}
