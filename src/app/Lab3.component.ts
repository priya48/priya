import {Component} from '@angular/core';
@Component({

  selector:"CA3",
  template:`

<div class="container">

<h3>Train Reservation System </h3><br>

<table border="1px" align ="center" class="table table-dark">

<tr>
<th> Passenger-Name </th>
<th> Passenger-Contact </th>
<th> Date of booking </th>
<th> Tier </th>
</tr>

<tr *ngFor="let train of detail" [ngClass]="{'text-info': train.tier == '3A'}">
<td> {{train.name}}</td>
<td> {{train.contact}}</td>
<td> {{train.date}}</td>
<td> {{train.tier}}</td>

</tr>


</table>

</div>

  `


})

export class Lab3CaComponent{

detail :any[]=[

{

name:"Priya",
contact:"8198073864",
date:"10-Oct-2019",
tier: "1A"

},


{

name:"Sneha",
contact:"81369547",
date:"11-Oct-2019",
tier: "2A"

},



{

name:"Simran",
contact:"466123",
date:"14-Oct-2019",
tier: "3A"

},


{

name:"Surjeet",
contact:"456789",
date:"16-Oct-2019",
tier: "1A"

},


{

name:"Chetna",
contact:"536987",
date:"19-Oct-2019",
tier: "2A"
},

{

name:"Ravi",
contact:"123456",
date:"20-Oct-2019",
tier: "3A"
},


];


}
