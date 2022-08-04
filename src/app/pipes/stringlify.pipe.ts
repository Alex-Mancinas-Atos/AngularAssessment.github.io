import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'stringlify'
})
export class StringlifyPipe implements PipeTransform {

  transform(input: Array<string> | undefined, sep= ', '): string {
    return  input ? input.join(sep) : "No data to display";
  }

}
