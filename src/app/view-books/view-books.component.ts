import { Component, OnInit } from '@angular/core';
import { BooksRepositoryService } from '../services/books-repository.service';
import { IBook, Book } from '../models/book-details';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books: IBook[];
  public search: string;

  constructor(private booksRepositoryService: BooksRepositoryService) {
  }

  ngOnInit(): void {
    this.booksRepositoryService.FetchAllBooks().subscribe((res: Book[]) => this.books = res);
  }

  onChange(value: string): void {
    if (value.length > 0) {
      this.booksRepositoryService.SearchBooks(value).subscribe((res: Book[]) => this.books = res)
    } else {
      this.booksRepositoryService.FetchAllBooks().subscribe((res: Book[]) => this.books = res);
    }
  }
}
