import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  balance: number;
  amount: number;
  event: any;
  constructor(private _http: HttpService) {}

  ngOnInit() {
    this.balance = this._http.balance;
  }
  buyCoins() {
    this.balance += this.amount;
    this._http.balance = this.balance;
    let id = this._http.randomId();
    console.log(id);
    this.event = {
      id: id,
      amount: this.amount,
      balance: this.balance,
      action: "Buy"
    };
    console.log("this is the event", event);
    this._http.owned.push(event);
    this.amount = 0;
  }
}
