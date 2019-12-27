import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list-unread',
  templateUrl: './book-list-unread.component.html',
  styleUrls: ['./book-list-unread.component.css']
})
export class BookListUnreadComponent implements OnInit {
  bookList: IBook[] = [];
  newBook: string;

  constructor(private bookService: BookService, private router: Router) {
  }

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

  addNewBook() {
    const book: IBook = {
      id: this.bookList.length + 1,
      name: this.newBook,
      read: false
    };
    this.bookService.createBook(book).subscribe(next => {
        this.newBook = '';
        this.ngOnInit();
        alert('Added new book');
      }
    );
  }
}
