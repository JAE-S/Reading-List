import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = "api/books"

  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }
  
  addBook(book: Book){
    return this.http.post(this._baseURL+"/AddBook/", book);
  }

  getBookById(id: number){
    return this.http.get<Book>(this._baseURL+"/SingleBook/"+id);
  }
}
