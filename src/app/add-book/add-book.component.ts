import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { ManegerService } from '../maneger.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {


  newBook: any ={name:'',author:'',tags:'',quantity:'',Image:''};
  constructor(private bookservice:BookService){}

  addBook(bookForm:NgForm):void{
    this.bookservice.addBooks(this.newBook);

    this.newBook={name:'',author:'',tags:'',quantity:'',Image:''};

    bookForm.resetForm();
  }

}
