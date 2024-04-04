import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls:['./settings.component.css'] 
})
export class SettingsComponent {

  count: number = 0;
  userEmail: string = '';
  managers: any[] = [];
  firstName: string = '';
  email: string = '';
  jobTitle: string = '';

  constructor(public bookService: BookService){
  }


  addManager = () => {
    this.count++;
    if(this.count<=2){
      const manager = {
        firstName: this.firstName,
        email: this.email,
        jobTitle: this.jobTitle
      };
      this.managers.push(manager);
      this.firstName = '';
      this.email = '';
      this.jobTitle = '';
      alert("Manager added succsessfuly! Permitions of a new manager are updated.")
    }
    if(this.count>2){
      alert("Only 2 managers can be added! You exceed the allowed amount!")
    }

  }

  setDarkMode(): void {
    this.bookService.toggleDarkMode();
  }

 
}
