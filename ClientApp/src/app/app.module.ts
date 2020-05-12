import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';

import { BooksComponent } from './components/books/books/books.component';
import { NewBookComponent } from './components/books/new-book/new-book.component';
import { UpdateBookComponent } from './components/books/update-book/update-book.component';
import { ShowBookComponent } from './components/books/show-book/show-book.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';

import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    NewBookComponent,
    ShowBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'new-book', component: NewBookComponent },
      { path: 'update-book/:id', component: UpdateBookComponent },
      { path: 'show-book/:id', component: ShowBookComponent },
      { path: 'delete-book/:id', component: DeleteBookComponent },
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
