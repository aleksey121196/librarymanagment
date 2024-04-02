import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  getBooks ():Observable<any[]>{
    return this.books.asObservable();
  }

  addBooks(book:any):void{
    const currentBooks = this.books.value;
    currentBooks.push(book);
    this.books.next(currentBooks);
  }
}
