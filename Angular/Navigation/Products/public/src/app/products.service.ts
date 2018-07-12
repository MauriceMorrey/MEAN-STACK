import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http: HttpClient) {   
    
  }

  getProducts(){
    return this._http.get('/api/products');
  }

  postProducts(data){
    console.log("data",data);
    return this._http.post('/api/products',data);    
  }

  showProduct(id){
    return this._http.get(`/api/showProduct/${id}`);        
  }

  updateProduct(id,title,price,image_url){
    return this._http.put(`/api/updateProduct/${id}` ,{title:title,price:price,image_url:image_url});    
    
  }

  deleteProduct(id){
    return this._http.delete(`/api/deleteProduct/${id}`);    
    
  }

}



