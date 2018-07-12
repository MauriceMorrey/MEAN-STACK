import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // title = 'app';
  // title = "MEAN";
  title = "Restful Tasks API";  
  // Set the attribute tasks to be an array.
  tasks = [];
  task = [];
  constructor(private _httpService: HttpService) {}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();
    // this.onButtonClickParam(data);
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
      // This may be different for you, depending on how you set up your Task API.
      this.tasks = data["tasks"];
    });
  }
  oneTask(task){
    let observable = this._httpService.showTask(task);
    observable.subscribe(data => console.log("Showed our task!", data));
    this.task = task;
  }
//   onButtonClickParam(data): void { 
//     console.log(`Click event is working with num param: ${data}`);
//     // call the service's method to post the data, but make sure the data is bundled up in an object!
//     let observable = this._httpService.postTasks({data});
//     observable.subscribe(data => console.log("Got our data!", data));
// }

}
