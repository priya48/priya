import { Component } from '@angular/core';
@Component ({

 selector: 'lab4',
 template: `

<div >

<form #f1="ngForm" (ngSubmit)="onsubmit(f1)" >

<div class="form-group" class=" bg-info" align="center">
<h3> Registration form  for Culture Event</h3>
</div>

<div class="form-group">
<label for ="sn" class=" text text-success" >Student Name </label>
<input align="center"  type="text" class="form-control" required ngModel name="Sname" #sn="ngModel"   >
<div *ngIf=" !sn.valid && sn.touched">
<div class="alert alert-danger" *ngIf="sn.errors.required">This Filed is required</div>

</div>
</div>

<div class ="form-group" >
<label for ="rg" class=" text text-success" >Reg N0  </label>
<input  type ="text"  class="form-control"  required ngModel name="Reg" #rg="ngModel" minlength="8"  >
<div *ngIf=" !rg.valid && rg.touched">
<div class="alert alert-danger" *ngIf="rg.errors.required">This Filed is required</div>
<div class="alert alert-danger" *ngIf="rg.errors.minlength">Maximum 8 charater is required</div>
</div>
</div>


<div class="form-group" >
<label for ="mn" class=" text text-success" >Mobile number  </label>
<input type ="text"  class="form-control"  required ngModel name="Mobile" #mn="ngModel" minlength="10"  >
<div *ngIf=" !mn.valid && mn.touched">
<div class="alert alert-danger" *ngIf="mn.errors.required">This Filed is required</div>
<div class="alert alert-danger" *ngIf="mn.errors.minlength">Maximum 10 number  is required</div>
</div>
</div>



<div class="form-group">
<label for ="em" class=" text text-success"> Email id   </label>
<input type ="text"  class="form-control"  required ngModel name="Email" #em="ngModel" pattern="priya@gmail.com"  >
<div *ngIf=" !em.valid && em.touched">
<div class="alert alert-danger" *ngIf="em.errors.required">This Filed is required</div>
<div class="alert alert-danger" *ngIf="em.errors.pattern">Pattern is not matching </div>
</div>
</div>



<div class="radio">

<label class=" text text-success">Select Cousre </label>
<label>B.C.A
<input ngModel type ="radio"  name ="Course" value="bca">
</label>

<label>B.Sc(IT)
<input ngModel type ="radio"  name ="Course" value="bsc(IT)">
</label>

<label>M.C.A
<input  ngModel type ="radio"  name ="Course" value="mca">
</label>

</div>


<div class="form-group">
<label for ="count" class="text text-success">Interested </label>
<select ngModel name="Interested" id="count" class="form-control">
<option value=""></option>
<option *ngFor="let c of count" [value]="c.name">
{{c.name}}
</option>
</select>
</div>


<div class="checkbox">
<label for="cb" class=" text text-success">
<input type="checkbox" ngModel name="SaveData" id="cb" > Save
</label>
</div>


<div class="form-group">
<button type ="submit"  class ="btn btn-danger" [disabled] ="!f1.valid"> Submit</button>
</div>

<p> {{f1.value | json }} </p>

 </form>

</div>
 `
})

 export class Lab4CAComponent{

onsubmit(f1){

  console.log(f1);
}


count = [
{ name: 'Dancing'},
{ name: 'Singing'},
{ name: 'Painting'}
];



 }
