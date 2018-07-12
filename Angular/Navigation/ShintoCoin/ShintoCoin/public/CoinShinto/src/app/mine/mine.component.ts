import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";



@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  pi:string="141592653589793948954930389171";
	index:number
	correct:number;
	guess:number;
	balance:number;
  constructor(private _http:HttpService) {
  	this.reset()
  	this.correct=0

   }

  ngOnInit() {
  }
  reset(){
  	this.index= Math.floor(Math.random()*30);
  	this.correct= parseInt(this.pi[this.index]);
  	this.guess=null
  	if (this.correct==2){this.correct = 0}
  }
  checkAnswer(){
  	if(this.guess == this.correct){
  		this.correct= 1
  		this._http.balance ++
  		this.balance=this._http.balance
  		this._http.owned.push({id:this._http.randomId(),action:"Mined",amount:1,balance:this.balance})
  		this.reset()
  	}
  	else{
  		this.correct=2
  	}
  }

}
