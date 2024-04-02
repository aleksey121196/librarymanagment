import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {


  newBook: any ={name:'',author:'',tags:'',quantity:'',imageUrl:null};
  constructor(private bookservice:BookService){}

  addBook(bookForm:NgForm):void{
    this.bookservice.addBooks(this.newBook);

    this.newBook={name:'',author:'',tags:'',quantity:'',imageUrl:null};

    bookForm.resetForm();
  }

  onFileSelected(event:any):void{
    const file:File=event.target.files[0];
    this.newBook.imageUrl=file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newBook.imageUrl = reader.result;
    };

  }

}
