import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  author;
  authorToEdit: any;

  constructor(private _authorsService: AuthorsService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.authorToEdit = {_id: "", name: ""};
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  // editFormPopUp(author){
  //   this.authorToEdit = {
  //     _id: author._id,
  //     name: author.name,
  //   }
  //   author.loggedIn = true;
  // }
  editAuthor(_id, authorToEdit) {
    console.log(`We're now editing!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._authorsService.updateAuthor(_id, authorToEdit);
    observable.subscribe(data => console.log("Edited our author!", data));
    // this.getAuthorsFromService(); 
    this.authorToEdit = {_id: "", name: ""};   
    this._router.navigate(['/']);

  }

}
