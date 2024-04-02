import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';


@Component({
  selector: 'app-inlibrary',
  templateUrl: './inlibrary.component.html',
  styleUrl: './inlibrary.component.css'
})
export class InlibraryComponent implements OnInit{
  books$?:Observable<any[]>;

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.books$=this.bookService.getBooks();
  }

  

}
