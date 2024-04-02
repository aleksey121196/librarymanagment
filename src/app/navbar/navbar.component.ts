import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery:string = '';
  searchResults:any[]=[];

  constructor(private searchService:SearchService){}

  search():void{
    if(this.searchQuery.trim()){
      this.searchService.search(this.searchQuery).subscribe(results =>{
        this.searchResults=results.items;
      });
    }else{
      this.searchResults=[];
    }
  }

}
