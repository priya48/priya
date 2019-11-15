import { Component } from '@angular/core';
@Component ({

 selector: 'formval', //CSS Selector
 template:`

<form #f2="ngForm" (ngSubmit)="submit(f2)">

<div class="form-group">
<label for="fn">First name</label>
<input type="text"  required ngModel name="fname"  minlength="4" maxlenght="5" pattern="priya"
class="form-control" #fn="ngModel" (click)="showValue(fn)" autocomplete="off">

<div class="alert alert-danger" *ngIf="!fn.valid && fn.touched">
<div class="alert alert-danger" *ngIf="fn.errors.required"> Please fill name....</div>
<div class="alert alert-danger" *ngIf="fn.errors.minlength"> minlength errors...</div>
<div class="alert alert-danger" *ngIf="fn.errors.pattern"> pattern is not matching...</div>
</div>
</div>


<div class="form-group">
<label>Password</label>
<input type="password" name="password" class="form-control" placeholder="password">
</div>

<div class="radio">
<label>
<input ngModel type ="radio" name="gender" value="M">
Male
</label>
 </div>


 <div class="radio">
 <label>
 <input ngModel type ="radio" name="gender" value="F">
 Female
 </label>
  </div>


<div class="form-group">
<label for ="country">Select Counteries </label>
<select ngModel name="country" id="country" class="form-control">
<option value=""></option>
<option *ngFor="let c of country" [value]="c.id">
{{c.name}}
</option>
</select>
</div>

<div class="form-group">
<p> {{f2.value | json }}</p>
<input type="submit" name="submit" class="btn btn-danger" [disabled]="! f2.valid">
</div>

</form>

 `

})


 export class FormvalidateComponent {

   showValue(fn)
   {
     console.log(fn);
   }

   submit (f2) { console.log(f2) ;}

   country = [

{id:1, name: 'India'},

{id:2, name: 'China'},

{id:3, name: 'Japan'}
   ];


 }
