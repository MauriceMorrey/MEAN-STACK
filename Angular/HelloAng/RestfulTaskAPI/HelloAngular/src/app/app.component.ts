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
  newTask: any;
  taskToEdit: any;
  loggedIn: boolean;
  constructor(private _httpService: HttpService) {}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();
    // this.onButtonClickParam(data);
    this.newTask = { title: "", description: "" };
    this.taskToEdit = {_id: "", title: "", description: "" };
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
  oneTask(task) {
    let observable = this._httpService.showTask(task);
    observable.subscribe(data => console.log("Showed our task!", data));
    this.task = task;
  }
  onSubmit() {
    console.log(`Looks like we're submitting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postTasks(this.newTask);
    observable.subscribe(data => console.log("Posted our task!", data));
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();        
  }
  editFormPopUp(task){
    this.taskToEdit = {
      _id: task._id,
      title: task.title,
      description: task.description
    }
    task.loggedIn = true;
  }
  editTask(id, taskToEdit) {
    console.log(`We're now editing!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.updateTask(id, taskToEdit);
    observable.subscribe(data => console.log("Edited our task!", data));
    // this.taskToEdit = { _id: "", title: "", description: "" };
    // this.loggedIn = true;
    this.getTasksFromService();    
  }
  deleteTaskFromService(id) {
    console.log(`We're now deleting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => console.log("Deleted our task!", data));
    // this.taskToEdit = {_id: "", title: "", description: "" };
    this.getTasksFromService();
  }
}
