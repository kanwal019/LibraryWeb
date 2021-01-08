import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksRepositoryService {
  private serviceUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.serviceUrl;
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  FetchAllBooks(){
    return this.http.get(this.serviceUrl + "FetchAllBooks", {headers: this.headers});
  }
}