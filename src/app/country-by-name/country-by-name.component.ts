import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, Observable, switchMap, tap } from 'rxjs';
import { ICountryDetails } from '../models/country-details.model';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-country-by-name',
  templateUrl: './country-by-name.component.html',
  styleUrls: ['./country-by-name.component.scss']
})
export class CountryByNameComponent implements OnInit {
public countryDetails!:Observable<ICountryDetails>
  constructor(
    private countryProvider: ProvidersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.countryDetails = this.activatedRoute.params.pipe(
      map((params)=>{
        return params['name']
      }),
      switchMap((name:string)=> this.countryProvider.provideCountryByName(name)),
    );
  }

}
