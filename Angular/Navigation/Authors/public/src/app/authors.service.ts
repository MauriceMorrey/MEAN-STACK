import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private _http: HttpClient) {   
    
  }

  getAuthors(){
    return this._http.get('/api/authors');
  }

  postAuthors(data){
    console.log("data",data);
    return this._http.post('/api/authors',data);    
  }

  showAuthor(id){
    return this._http.get(`/api/showAuthor/${id}`);        
  }

  updateAuthor(id,data){
    return this._http.put(`/api/updateAuthor/${id}` ,data);    
    
  }

  deleteAuthor(id){
    return this._http.delete(`/api/deleteAuthor/${id}`);    
    
  }

}



