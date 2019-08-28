import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-observable-and-subscribe',
  templateUrl: './observable-and-subscribe.component.html',
  styleUrls: ['./observable-and-subscribe.component.css']
})
export class ObservableAndSubscribeComponent implements OnInit {
  softBooks: Book[];

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.getBooksFromService();
  }

  getBooksFromService() {
    this.bookservice.getBooksFromStore().subscribe(res => {
      console.log(res);
      return (this.softBooks = res);
    });
  }
}
