import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _baseURL: string = "api/Books/";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL)
  }

  getBookById(id: number) {
    return this.http.get<Book>(this._baseURL + id);
  }

  postBook(book: Book) {
    return this.http.post(this._baseURL, book);
  }

  updateBook(book: Book) {
    return this.http.put(this._baseURL + book.id, book);
  }

  DeleteBook(id: number) {
    return this.http.delete(this._baseURL + id);
  }
}
