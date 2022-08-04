import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import{HttpClientModule} from '@angular/common/http';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SearchByColumnPipe } from './pipes/search-by-column.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { StringlifyPipe } from './pipes/stringlify.pipe';
import { JsonToArrayPipe } from './pipes/json-to-array.pipe';
import { CountryByNameComponent } from './country-by-name/country-by-name.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path: '', component: CountryComponent},
  {path: 'country/:name', component: CountryByNameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PaginationPipe,
    SearchByColumnPipe,
    SortPipe,
    StringlifyPipe,
    JsonToArrayPipe,
    CountryByNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
