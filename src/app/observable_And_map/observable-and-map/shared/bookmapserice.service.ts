import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/observable_And_Subscribe/book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookmapsericeService {
  bookMapURL = '/api/books';
  constructor( private http: HttpClient) { }

  getBookDetailsById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookMapURL + '/' + id);
  }
}
