import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-pending-reads',
  templateUrl: './pending-reads.component.html',
  styleUrls: ['./pending-reads.component.css']
})
export class PendingReadsComponent implements OnInit {

  bookServices: BookService;
  pendingRead: Book[];
  variableCounter: number = 0;

  constructor(bookServices:BookService) {
    this.bookServices = bookServices;
    //this.variableCounter = 0;
  }

  ngOnInit(): void {
    this.getPendingReads();
  }

  getPendingReads(): void{
    this.pendingRead = this.bookServices.getPendingReads();
  }

  getNextLineNumber(): number{
    this.variableCounter += 1;  
    return this.variableCounter;
  }

}
