import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  // Defines book were getting from the database
  book: Book; 

  constructor(private service: BookService, private route: ActivatedRoute ) { }

  ngOnInit() {
    // Get id from url activated route
   this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
     this.book = data; 
   })
  }

}
