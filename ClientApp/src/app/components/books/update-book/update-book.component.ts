import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: Book;
  updateBookForm: FormGroup;

  constructor(
    private service: BookService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;

      this.updateBookForm = this.fb.group({
        id: [data.id],
        title: [data.title, Validators.required],
        author: [data.author, Validators.required],
        description: [data.description, Validators.compose([Validators.required, Validators.minLength(10)])],
        rate: [data.rate],
        dateStart: [this.formatDate(data.dateStart)],
        dateRead: [this.formatDate(data.dateRead)],
      });
    });
  }

  formatDate(date: Date) {
    if (date) 
      return new Date(date).toISOString().substring(0,10);
  }

  onSubmit() {
    console.log(this.updateBookForm.value);
    this.service.updateBook(this.updateBookForm.value).subscribe(data => {
      this.router.navigate(["/books"]);
    });
  }
}
