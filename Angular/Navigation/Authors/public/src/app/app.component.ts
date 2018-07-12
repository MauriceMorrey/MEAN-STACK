import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "./authors.service";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Authors';
  authors = [];
  author = [];
  newAuthor: any;
  authorToEdit: any;
  loggedIn: boolean;

  constructor(private _authorsService: AuthorsService,private _route: ActivatedRoute,
    private _router: Router) {}
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.newAuthor = { name: ""};
    this.authorToEdit = {_id: "", name: ""};
  }

  goHome() {
    this._router.navigate(['/home']);
  }

  goToEdit() {
    this._router.navigate(['/edit']);
  }

  goToNew() {
    this._router.navigate(['/new']);
  }

  // getAuthorsFromService() {
  //   let observable = this._authorsService.getAuthors();
  //   observable.subscribe(data => {
  //     console.log("Got our authors!", data);
  //     // In this example, the array of authors is assigned to the key 'authors' in the data object.
  //     // This may be different for you, depending on how you set up your Author API.
  //     this.authors = data["authors"];
  //   });
  // }
  // oneAuthor(author) {
  //   let observable = this._authorsService.showAuthor(author);
  //   observable.subscribe(data => console.log("Showed our author!", data),
  //   this.author = author["data"][0] //might need to fix this
  // );
  // }
  // onSubmit() {
  //   // console.log(`Looks like we're submitting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    
  //   console.log("this is the new Author", this.newAuthor);
  //   let observable = this._authorsService.postAuthors(this.newAuthor);
  //   observable.subscribe(data => console.log("Posted our author!", data));
  //   this.newAuthor = { name: ""};
  //   this.getAuthorsFromService();        
  // }
  // editFormPopUp(author){
  //   this.authorToEdit = {
  //     _id: author._id,
  //     name: author.name,
  //   }
  //   author.loggedIn = true;
  // }
  // editAuthor(id, authorToEdit) {
  //   console.log(`We're now editing!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
  //   let observable = this._authorsService.updateAuthor(id, authorToEdit);
  //   observable.subscribe(data => console.log("Edited our author!", data));
  //   // this.getAuthorsFromService();    
  // }
  // deleteAuthorFromService(id) {
  //   console.log(`We're now deleting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
  //   let observable = this._authorsService.deleteAuthor(id);
  //   observable.subscribe(data => console.log("Deleted our author!", data));
    // this.authorToEdit = {_id: "", name: "", description: "" };
    // this.getAuthorsFromService();
  // }


}
