import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public bookService: BookService) {}

}
