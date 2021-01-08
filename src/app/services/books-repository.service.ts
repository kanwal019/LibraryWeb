import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksRepositoryService {
  private serviceUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.serviceUrl;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  FetchAllBooks() {
    return this.http.get(this.serviceUrl + "FetchAllBooks", { headers: this.headers });
  }

  SearchBooks(value: string) {
    return this.http.get(this.serviceUrl + "SearchBooks?query=" + value, { headers: this.headers });
  }
}
