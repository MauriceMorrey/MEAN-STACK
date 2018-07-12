import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors = [];
  author;
  authorToEdit: any;
  constructor(private _authorsService: AuthorsService){}

  ngOnInit() {
    this.getAuthorsFromService()
  }

  getAuthorsFromService() {
    let observable = this._authorsService.getAuthors();
    observable.subscribe(data => {
      console.log("Got our authors!", data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      this.authors = data["authors"];
    });
  }

  oneAuthor(author) {
    let observable = this._authorsService.showAuthor(author);
    observable.subscribe(data => console.log("Showed our author!", data),
  );
  this.author = author //might need to fix this
  }

  deleteAuthorFromService(id) {
    console.log(`We're now deleting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._authorsService.deleteAuthor(id);
    observable.subscribe(data => console.log("Deleted our author!", data));
    this.getAuthorsFromService();
  }

}
