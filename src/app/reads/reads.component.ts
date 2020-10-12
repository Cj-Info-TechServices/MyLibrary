import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-reads',
  templateUrl: './reads.component.html',
  styleUrls: ['./reads.component.css']
})
export class ReadsComponent implements OnInit {

  bookServices: BookService;
  booksRead: Book[];
  variableCounter: number = 0;

  constructor(bookServices:BookService) {
    this.bookServices = bookServices;
    //this.variableCounter = 0;
  }

  ngOnInit(): void {
    this.getReadBooks();
  }

  getReadBooks(): void{
    this.booksRead = this.bookServices.getReadBooks();
  }

  getNextLineNumber(): number{
    this.variableCounter += 1;  
    return this.variableCounter;
  }

}
