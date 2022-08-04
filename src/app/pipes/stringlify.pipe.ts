import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stringlify'
})
export class StringlifyPipe implements PipeTransform {

  transform(input:Array<string> ): string {
    return  input ? input.join(', ') : "No data to display";
  }

}
