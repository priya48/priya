import { Component } from '@angular/core';
@Component ({

 selector: 'reg',
 template: `

 <form #f="ngForm" (ngSubmit)="submit(f)">

 <div class="form-group">
 <h3> Student Registration form </h3>
 </div>


 <div class="form-group">
 <label for="fn">First name</label>
 <input type="text" class="form-control" required ngModel name="Firstname" #fn="ngModel"  minlength="5">
 <div class="alert alert-danger" *ngIf="!fn.valid && fn.touched">Please fill First name....
 <div class="alert alert-danger" *ngIf="fn.errors.minlength">Name should be  minimum 5 character</div>

 </div>
 </div>

<div class="form-group">
<label for="ln">Last name</label>
<input type="text" class="form-control" required ngModel name="Lastname" #ln="ngModel"  maxlength="5">
<div class="alert alert-danger" *ngIf="! ln.valid && ln.touched">Fill last name
<div class="alert alert-danger" *ngIf=" ln.errors.maxlength">  maximum 5 character</div>
</div>
</div>


<div class="form-group">
<label>Email id </label>
<input type="text" class="form-control">
</div>


<div class="form-group">
<label for="mn">Mobile number</label>
<input type="number" class="form-control" required ngModel name="mobileno" #mn="ngModel"  pattern="8198073864">
<div class="alert alert-danger" *ngIf="!mn.valid && fn.touched">
<div class="alert alert-danger" *ngIf="mn.errors.pattern">pattern is not matching </div>
</div>
</div>

<div class="form-group">
<label>Pin Code</label>
<input type="number" class="form-control">
</div>

<div class ="form-group">
<label>Gender</label>
<div class="radio">
<label>
<input ngModel type ="radio" name="Gender" value="M">
Male
</label>
 </div>


 <div class="radio">
 <label>
 <input ngModel type ="radio" name="Gender" value="F">
 Female
 </label>
  </div>

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


  <div class="checkbox">
  <label for="cb">
  <input type="checkbox" ngModel name="SaveData" id="cb" > Save all these data
  </label>
  </div>
   <br> <br>
 <p> {{f.value | json }} </p>



<div class="form-group" align="center">
<button class="btn btn-warning" type="submit"[disabled]="! f.valid" >Submit </button>

</div>


 </form>


 `
})

 export class RegisterComponent {
   submit (f)
   {
     console.log(f);
   }

   country = [
   {id:1, name: 'India'},
   {id:2, name: 'China'},
   {id:3, name: 'Japan'}
   ];

 }
