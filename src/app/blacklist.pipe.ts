import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var r1:string="";

    if(value=="stupid"||value=="idiot"){
     r1="Blacklisted Word";
     
    }
    else{
      r1="Ok"
    }
    return r1;
  }

}
