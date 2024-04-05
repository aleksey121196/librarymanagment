import { Component} from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls:['./settings.component.css'] 
})
export class SettingsComponent {
  
  darkMode: boolean;
  newManager = {
    firstName: '',
    email: '',
    jobTitle: ''
  };
  managers: any[] = [];
  count:number = 0;
  
  constructor(private bookService: BookService){
    this.darkMode = false;
  }

  addManager(managerForm: any) {
    if (managerForm.valid) {
      this.count++;
      if(this.count<=2){
        this.managers.push({...this.newManager}); 
        managerForm.resetForm();
        alert("Maneger added succsessfuly!")
      }
      if(this.count>2){
        alert("You cannot add more than 2 manegers!")
        managerForm.resetForm();
      }
      
    }
  }
  
  setDarkMode(): void {
    this.bookService.toggleDarkMode();
  }
 
  
}
