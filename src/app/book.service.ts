import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private isDarkMode = false;

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

  
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }

  getBooks ():Observable<any[]>{
    return this.books.asObservable();
  }

  addBooks(book:any):void{
    const currentBooks = this.books.value;
    currentBooks.push(book);
    this.books.next(currentBooks);
  }

  toggleDarkMode = () =>{
    this.isDarkMode=!this.isDarkMode;
    this.updateBodyClass();
  }

  private updateBodyClass =()=>{
    document.body.classList.toggle('dark-mode',this.isDarkMode);
    document.body.classList.toggle('light-mode',this.isDarkMode);

  }

  isDarkModeEnabled = (): boolean=>{
    return this.isDarkMode;
  }
}
