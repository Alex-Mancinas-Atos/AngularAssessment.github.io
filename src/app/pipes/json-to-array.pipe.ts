import { Pipe, PipeTransform } from '@angular/core';

export interface IObjectStringValues{
  [index: string]: string;
}

@Pipe({
  name: 'jsonToArray'
})
export class JsonToArrayPipe implements PipeTransform {

  transform( object: IObjectStringValues | undefined | string[]): Array<string> {
      return  object ? Object.values(object) : ["No data to display"]
  }

}
