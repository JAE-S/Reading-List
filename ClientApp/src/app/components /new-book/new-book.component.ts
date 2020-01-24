import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  addBookForm: FormGroup; 
  // Injects BookService, FormBuilder, & Router
  constructor(private service: BookService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      // Random number 
      id:[Math.floor(Math.random()*1000)],
      title: [null, Validators.required], 
      author: [null, Validators.required], 
      description: [null, Validators.compose([Validators.required, Validators.minLength(30)])], 
      rate: [null], 
      dateStart: [null], 
      dateRead: [null], 

    })
  }
  // Subscribe function submits the request 
  onSubmit(){
    this.service.addBook(this.addBookForm.value).subscribe(data => {
      this.router.navigate(["/books"]);
    })
  }

}
