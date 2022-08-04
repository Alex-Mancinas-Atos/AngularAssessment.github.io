import { Pipe, PipeTransform } from '@angular/core';
import { ICountries } from '../models/countries.model';

@Pipe({
  name: 'searchByColumn'
})
export class SearchByColumnPipe implements PipeTransform {

  transform(countryList: Array<ICountries>, searchBy: string): Array<ICountries> {
    return countryList.filter((country) => (country.name.official as string).toLocaleLowerCase().includes(searchBy.toLocaleLowerCase()));
  }

}
