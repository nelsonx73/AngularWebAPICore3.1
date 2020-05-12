import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book;

  constructor(private service: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => this.book = data);
  }

  deleteBook(id: number) {
    this.service.DeleteBook(id).subscribe(data => {
      return this.router.navigate(['/books']);
    });
  }

}
