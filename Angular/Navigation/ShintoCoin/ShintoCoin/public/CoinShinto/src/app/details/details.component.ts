import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  event: any;
  idx: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.idx = params["id"];
    });
    this.event = this._http.owned[this.idx];
  }
}
