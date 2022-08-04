import { Pipe, PipeTransform } from '@angular/core';
import { ICountries } from '../models/countries.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(countryList: Array<ICountries>): Array<ICountries> {
    return countryList.sort((a: ICountries, b:ICountries) => a.name.official.localeCompare(b.name.official));
  }

}
