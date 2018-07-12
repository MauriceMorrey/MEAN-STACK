import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor: any;

  constructor(private _authorsService: AuthorsService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.newAuthor = { name: ""};
  }

  onSubmit(name) {
    console.log(`Looks like we're submitting!`); // call the service's method to post the data, but make sure the data is bundled up in an object!
    console.log(`Looks like we're submitting!`, name); // call the service's method to post the data, but make sure the data is bundled up in an object!    
    console.log("this is the new Author", this.newAuthor);
    if (name.valid){
      let observable = this._authorsService.postAuthors(this.newAuthor);
      observable.subscribe(data => console.log("Posted our author!", data));
      this.newAuthor = { name: ""};
      this._router.navigate(['/']);
    }
   
    // this.getAuthorsFromService();        
  }

}
