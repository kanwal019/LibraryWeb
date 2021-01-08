import { Component, OnInit } from '@angular/core';
import { BooksRepositoryService } from '../services/books-repository.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books: any;
  constructor(private booksRepositoryService : BooksRepositoryService) { 
  }

  ngOnInit(): void {
    this.booksRepositoryService.FetchAllBooks().subscribe((data:any) => this.books = data);
    console.log(this.books);
  }

}
