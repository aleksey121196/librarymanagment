import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private darkMode: boolean = false;

  constructor() { }

  getBooks ():Observable<any[]>{
    return this.books.asObservable();
  }

  addBooks(book:any):void{
    const currentBooks = this.books.value;
    currentBooks.push(book);
    this.books.next(currentBooks);
  }

  toggleDarkMode = ()  => {
    return !this.darkMode;
  }

  isDarkMode = ():boolean => {
    console.log("Dark mode on")
    return this.darkMode;
  }
}
