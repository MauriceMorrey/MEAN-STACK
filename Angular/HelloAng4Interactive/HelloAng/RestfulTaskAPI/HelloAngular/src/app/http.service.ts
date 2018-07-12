import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // var data= {
    //   "title": "abcd",
    //   "description": "efghijklm"
    // }
    // var id = {"_id": "5b216e42033c5e4818452ee8"}
    // this.postTasks(data);
    // this.showTask(id);
    // this.updateTask(id, data);
    // this.deleteTask(id, data);    
    
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/api/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/tasks');
  }

  postTasks(data){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.post('/api/tasks', data);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Posted our tasks!", data));
    // return this._http.post('/api/tasks');    
  }

  showTask(id){
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/api/tasks', id);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Showed our task!", data));
    return this._http.get('/api/tasks', id);        
  }

  updateTask(id,data){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.put('/api/tasks',id, data);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Updated our task!", data));
  }

  deleteTask(id){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.delete('/api/tasks',id);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Deleted our task!", data));
  }

}


