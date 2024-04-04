import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InlibraryComponent } from './inlibrary/inlibrary.component';
import { OutlibraryComponent } from './outlibrary/outlibrary.component';
import { SettingsComponent } from './settings/settings.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookService } from './book.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddBookComponent,
    NavbarComponent,
    InlibraryComponent,
    OutlibraryComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule  {
 }
