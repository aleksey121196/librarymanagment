import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings'

  constructor(private http:HttpClient) { }

  search(query:string):Observable<any>{
    const url ='${this.apiUrl}?q=${encodeURIComponent(query)}';
    return this.http.get(url);
  }
}
