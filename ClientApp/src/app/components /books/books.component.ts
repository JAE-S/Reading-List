import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
// Array to hold all the books
public books: Book[];

  constructor(private service: BookService) { }

  // Whenever the books component is initialized get all of the books 
  ngOnInit() {
    this.service.getAllBooks().subscribe(data => {
      this.books = data; 
    })
  }

}
