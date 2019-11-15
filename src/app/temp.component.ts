import {Component} from '@angular/core';
@Component({

selector:'tem',
template:`<h1> {{"Title is:-"+title}}</h1> <p> {{getDetails()}}</p>  <p> {{"My name is :-"+getName()}}</p>

`

})

export class TempComponent{
title = "List of subjects";

details ="I love angular";

name = "Priya";

getDetails(){
  return this.details ;
}

getName(){
  return this.name ;
}


}
