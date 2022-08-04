import { Pipe, PipeTransform } from '@angular/core';

interface IObjectStringValues{
  [index: string]: string;
}

@Pipe({
  name: 'jsonToArray'
})
export class JsonToArrayPipe implements PipeTransform {

  transform( object: IObjectStringValues): Array<string> {
      return   Object.values(object) 
  }

}
