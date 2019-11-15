
import {Component} from '@angular/core';
@Component({

selector:"data",
template:`

<h3> Attriute binding </h3>
<table border="1">
<tr>
<td [attr.colspan]="Colspan">Hello </td>
</tr>
</table>

<h3> Style Binding</h3>
<button [style.backgroundColor]="Status ? 'green':'red' ">Hello </button>
<br/><br/>

<h4>Event Filtering</h4>

<input (keyup.enter)="KeyUp()">

<h4>Template Variable </h4>
<input  #fname (keyup.enter)="Up(fname.value)"/>




<h4>Two way Binding  </h4>
<input  [(ngModel)]="mob" (keyup.enter)="KEYup()">



<h4> Link Button </h4>
<a [href]="goo"><button type="button" class="btn btn-info"> Click on </button></a>


`
})

export class DataComponent{

  Status=true;

  KeyUp()
  {
    console.log("You just pressed enter key");
  }



  Up(fname)
  {
    console.log(fname);
  }


mob="12345678";
KEYup()
{
console.log(this.mob);
}



goo : String= "https://www.tutorialspoint.com";



}
