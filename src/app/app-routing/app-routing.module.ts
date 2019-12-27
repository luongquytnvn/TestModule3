import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListReadComponent} from '../book-list-read/book-list-read.component';
import {BookListUnreadComponent} from '../book-list-unread/book-list-unread.component';
import {BookListComponent} from '../book-list/book-list.component';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'read', component: BookListReadComponent
  },
  {
    path: 'unread', component: BookListUnreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
