import {Pipe,PipeTransform} from '@angular/core';
@Pipe({

  name:'short'
})

export class CustomPipe implements PipeTransform{

  transform(value: string, length ?: any){

    if(!value) return null;

    let InitialLength = (length) ? length :10 ;
    return value.substr(0, InitialLength);
  }
}
