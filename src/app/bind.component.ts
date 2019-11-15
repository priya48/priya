import {Component} from '@angular/core';
@Component ({

selector:"bind",
template:`<h2>property binding </h2>
<img src ="{{imglink}}">

`


})

export class BindComponent{
imglink="‪‪‪files:///assets/a1.jpg";

}
