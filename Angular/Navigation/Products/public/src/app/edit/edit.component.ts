import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product;
  productToEdit: any;
  id;
  message;

  constructor(private _productsService: ProductsService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    // this.productToEdit = {_id: "", title: "", price: "", image_url: ""}
    this._route.params.subscribe((params: Params) => {this.id = params['id']
    console.log("The id is", params['id'])});
    this._productsService.showProduct(this.id).subscribe(data => {
      console.log("data",data['product'])
      console.log("data",data)
      if(data['status'] === "success"){
        console.log("data",data)
        this.product = (data["product"])
        console.log(this.product)
      }
      else{
        this._router.navigate(['/'])
      }
    });

  }

  // editProduct(id, productToEdit) {
  //   console.log(`We're now editing!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
  //   let observable = this._productsService.updateProduct(id, productToEdit);
  //   observable.subscribe(data => console.log("Edited our product!", data));
  //   // this.getProductsFromService(); 
  //   // this.productToEdit = {_id: "", name: ""};   
  //   this.productToEdit = {_id: "", title: "", price: "", image_url: ""}
  //   this._router.navigate(['/product']);

  // }
  editProduct(){
    this._productsService.updateProduct(this.id, this.product.title,this.product.price,this.product.image_url).subscribe(data => {
      if(data['status'] === "success"){
        this._router.navigate(['product'])
      }
      else{
        this.message = 'something went south'
      }
    })
  }


  deleteProductFromService(id) {
    console.log(`We're now deleting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._productsService.deleteProduct(id);
    observable.subscribe(data => console.log("Deleted our product!", data));
    // this.getProductsFromService();
  }

}

