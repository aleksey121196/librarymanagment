import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBookComponent } from './add-book/add-book.component';
import { InlibraryComponent } from './inlibrary/inlibrary.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"Add-book",component:AddBookComponent},
  {path:"bookss",component:InlibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
