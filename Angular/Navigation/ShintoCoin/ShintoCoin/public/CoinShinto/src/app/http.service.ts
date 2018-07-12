import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  balance:number;
	owned:any;
  constructor(private _http: HttpClient) {
  	this.balance=0
   	this.owned=[]
   }
   ngOnInit(){
   }
  randomId() {
    return Math.floor(Math.random() * 9999) + 1;
  }
}
