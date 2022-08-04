import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINTS } from '../enums/endponts';
import { ICountryDetails } from '../models/country-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  provideCountries(): Observable<any[]>{
    return this.httpClient.get<any[]>(ENDPOINTS.REST_API_URL)
  }

  provideCountryByName(name:string):Observable<ICountryDetails>{
    return this.httpClient.get<ICountryDetails>(ENDPOINTS.COUNTRY_BY_NAME_URL + name)
  }
}
 