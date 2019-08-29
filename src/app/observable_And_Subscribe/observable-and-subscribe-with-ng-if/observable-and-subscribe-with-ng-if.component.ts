import { Component, OnInit } from '@angular/core';
import { BookServiceWithIdService } from './shared/book-service-with-id.service';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Component({
  selector: 'app-observable-and-subscribe-with-ng-if',
  templateUrl: './observable-and-subscribe-with-ng-if.component.html',
  styleUrls: ['./observable-and-subscribe-with-ng-if.component.css']
})
export class ObservableAndSubscribeWithNgIfComponent implements OnInit {

  bookById: Observable<Book>;
  constructor( private bookservice: BookServiceWithIdService) { }

  ngOnInit() {
    this.getBookByIdFromService();
  }

  getBookByIdFromService() {
    this.bookById = this.bookservice.getBookById(1);
    console.log(this.bookById);
  }

}
