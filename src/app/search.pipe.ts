import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: [], ...args: string[]): unknown {
    console.log(value, args);
    return value.filter((item : any)=>{
        return item.country.toLowerCase().indexOf(args[0].toLowerCase()) > -1
    });
  }

}
