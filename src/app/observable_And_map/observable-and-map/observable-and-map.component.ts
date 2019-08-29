import { Component, OnInit } from '@angular/core';
import { BookmapsericeService } from './shared/bookmapserice.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-and-map',
  templateUrl: './observable-and-map.component.html',
  styleUrls: ['./observable-and-map.component.css']
})
export class ObservableAndMapComponent implements OnInit {

  bookByName: Observable<string>;
  constructor( private bookmapservice: BookmapsericeService) { }

  ngOnInit() {
    this.getBookNameById();
  }

  getBookNameById() {
    // in map operator if we return book, it returns whole object
    // so to take particular parameter mention parameter name which needed. Ex: book.name
    this.bookByName = this.bookmapservice.getBookDetailsById(1).map(book => book.name);
  }

}
