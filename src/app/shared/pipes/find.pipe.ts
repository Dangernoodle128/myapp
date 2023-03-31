import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: string, args: any, arg2: any, rep: any): unknown {
    if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    if(!arg2){
    const replacedValue = value.replace(re,"<mark>" + args + "</mark>")
    return (replacedValue)
    }

    if(rep==true){
      const replacedValue = value.replace(re, arg2 )
    return (replacedValue)
    }

    const replacedValue = value.replace(re, "<span class='underscore'>" + args + "</span><mark>" + arg2 + "</mark>")
    return (replacedValue)
  }
}
