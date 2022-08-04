import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ICountries } from '../models/countries.model';
import { ProvidersService } from '../services/providers.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  private listOrder: "ASC" | "DESC" = 'ASC';
  public searchBy:FormControl = new FormControl('');
  public countries!:Observable<ICountries[]>;
  public itemsByPage:number = 25;
  public currentPage:number = 0;
  


  constructor(
    private countriesProvider: ProvidersService,
  ){}
  ngOnInit(): void {
      this.countries = this.countriesProvider.provideCountries().pipe(
        map((countryList) =>  countryList.sort(this.listOrder === 'ASC'? this.orderAsc:this.orderDesc))
      )
      
     
  }
  
  private orderAsc = ((a:ICountries,b:ICountries)=>a.name.official.localeCompare(b.name.official))

  private orderDesc =((a:ICountries,b:ICountries)=>b.name.official.localeCompare(a.name.official))
    
  public changeCurrenPage(newPage:number):void {
    this.currentPage = newPage;

  }
  

  public countryDetails(name:string){
    this.countriesProvider.provideCountryByName(name).subscribe((x) => console.log(x))
  }



  toggle(){
    if(this.listOrder === 'ASC'){
      this.countries = this.countries.pipe(
        map((countryList) =>  countryList.sort(this.orderDesc))
      );
      this.listOrder = "DESC"
    }else{
      this.countries = this.countries.pipe(
        map((countryList) =>  countryList.sort(this.orderAsc))
      );
      this.listOrder = 'ASC'
    }
  }
}
