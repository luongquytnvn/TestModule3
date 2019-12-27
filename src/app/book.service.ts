import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiURL = 'http://localhost:8082/book';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.apiURL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.apiURL + '/' + id);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.apiURL + id);
  }

  createBook(book: IBook): Observable<any> {
    return this.http.post(this.apiURL, book);
  }

  editBook(book: IBook): Observable<any> {
    return this.http.put(this.apiURL + '/' + book.id, book);
  }
}
