import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readBooks: Book[];
  pendingReads: Book[];
  itemPosition: number;
  httpObject: HttpClient;

  constructor(injectedHttpObj: HttpClient) {
    this.readBooks = [];
    this.pendingReads = [];
    this.httpObject = injectedHttpObj;
  }

  getReadBooks(): Book[]{
    if(this.readBooks === undefined || this.readBooks.length === 0){
      this.httpObject.get("http://127.0.0.1:8000/api/reads").subscribe(responseFromServer =>{
        var responseLength = Object.keys(responseFromServer).length;
        for(var i=0; i<responseLength; i++){
           this.readBooks.push(new Book(responseFromServer[i].id, responseFromServer[i].BookName,responseFromServer[i].Author, true, new Date(responseFromServer[i].created_at))); 
        }
      });
    }
    return this.readBooks;
  }
  // printArray(): void{
  //   for (let bookObj  of this.readBooks) {
  //     console.log("book name: " + bookObj.name);
  //   }
  // }

  getPendingReads(): Book[]{
    if(this.pendingReads === undefined || this.pendingReads.length === 0){
        this.httpObject.get("http://127.0.0.1:8000/api/pendingReads").subscribe(responseFromServer =>{
          var responseLength = Object.keys(responseFromServer).length;
          for(var i=0; i<responseLength; i++){
            this.pendingReads.push(new Book(responseFromServer[i].id, responseFromServer[i].BookName,responseFromServer[i].Author, false, new Date(responseFromServer[i].created_at))); 
          }
        }); 
    }
    
    return this.pendingReads;
  }

  addBook(newBook: Book): Promise<{}>{
    console.log("request body: " + newBook);
    var postRequestPromise =  this.httpObject.post("http://127.0.0.1:8000/api/addBooks", newBook).toPromise();
    return postRequestPromise;
  }

  updateBook(updatedBook: Book): Promise<{}>{
    console.log("request body: " + updatedBook);
    var updateRequestPromise =  this.httpObject.post("http://127.0.0.1:8000/api/updateBookStatus", updatedBook).toPromise();
    return updateRequestPromise;
  }

}
