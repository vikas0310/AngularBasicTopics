import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceWithIdService {
bookURL = '/api/books';
  constructor(private http: HttpClient) { }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookURL + '/' + id);
  }
}
