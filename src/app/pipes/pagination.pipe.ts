import { Pipe, PipeTransform } from '@angular/core';
import { ICountries } from '../models/countries.model';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(countryList: Array<ICountries>, currenPage: number, itemsByPage: number = 25): Array<ICountries> {
    const init = currenPage * itemsByPage;
    const limit = (currenPage * itemsByPage) + itemsByPage ;
    const countriesToRender: Array<ICountries> = [];
  
    for (let k = init; k < limit; k++) {
      const currentCountry: ICountries | undefined = countryList[k];
      if (!currentCountry) {
        break;
      } else {
        countriesToRender.push(currentCountry);

      }
    }
 
    
    return countriesToRender;
  }
}
