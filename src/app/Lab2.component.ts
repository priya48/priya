import {Component} from '@angular/core';
@Component({

selector:'lab',
template:`
<h2 [style.color]="Color"> Attribute binding Using the BootStrap Table classes  </h2>
<br>
<table class="table table-dark ">

<tr>
<th>Student Reg no. : </th>
<th> Student Name: </th>
<th> Student Contact no. : </th>
<th> Student Address : </th>
</tr>

<tr>
<td > 11708547</td>
<td> Priya</td>
<td> 8198073864</td>
<td> Mall road 19/2 </td>
</tr>


<tr>
<td> 1170345</td>
<td> Suraj</td>
<td > 9135648795 </td>
<td [attr.rowspan]="Rolspan"> Jalandhar cantt </td>
</tr>


<tr>
<td>11602316</td>
<td> Ram</td>
<td>9135648795 </td>
</tr>

<tr>
<td> 11702345</td>
<td> Raju</td>
<td>4851236597</td>
<td> Amritsar </td>
</tr>


<tr>
<td> 11704789</td>
<td> Arun</td>
<td> 123456789</td>
<td> Chandigarh </td>
</tr>

</table>

<h4>Event Filtering</h4>
<input (keyup.enter)="KeyUp()/">

`



})

export class CaComponent{

  Color="blue";
  Rolspan="2";
KeyUp(){
  console.log("You just pressed enter key");
}




}
