import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-outlibrary',
  templateUrl: './outlibrary.component.html',
  styleUrl: './outlibrary.component.css'
})
export class OutlibraryComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  error: string = '';

  constructor(private BookService: BookService) {}

  search(): void {
    this.searchResults = [];
    this.error = '';

    if (!this.searchQuery.trim()) {
      this.error = 'Please enter a search query';
      return;
    }

    this.BookService.search(this.searchQuery)
      .subscribe(
        (data: any) => this.handleSearchSuccess(data),
        (error) => this.handleSearchError(error)
      );
  }

  private handleSearchSuccess(data: any): void {
    this.searchResults = data.items || [];
    console.log('Search result:', this.searchResults);
  }

  private handleSearchError(error: any): void {
    this.error = 'Error searching: ' + error.message;
    console.error('Error searching:', error);
  }
}
