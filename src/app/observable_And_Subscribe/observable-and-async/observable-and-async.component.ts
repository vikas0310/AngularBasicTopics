import { Component, OnInit } from '@angular/core';
import { BookService } from '../observable-and-subscribe/shared/book.service';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Component({
  selector: 'app-observable-and-async',
  templateUrl: './observable-and-async.component.html',
  styleUrls: ['./observable-and-async.component.css']
})
export class ObservableAndAsyncComponent implements OnInit {

  /*
  if want to display data without subscribe use async pipe.
  To use async pipe call observable interface as call below and assign value to it.
  */
  softBooks: Observable<Book[]>;
  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.getBooksFromService();
  }

  getBooksFromService() {
    this.softBooks = this.bookservice.getBooksFromStore();
    console.log(this.softBooks);
  }


}
