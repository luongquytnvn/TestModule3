import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list-read',
  templateUrl: './book-list-read.component.html',
  styleUrls: ['./book-list-read.component.css']
})
export class BookListReadComponent implements OnInit {
  bookList: IBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }
  click(book: IBook) {
    console.log(book);
    const update: IBook = {
      id: book.id,
      name: book.name,
      read: !book.read
    };
    this.bookService.editBook(update).subscribe(next => {
      this.ngOnInit();
    });
  }
}
