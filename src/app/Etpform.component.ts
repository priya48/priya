import {Component} from '@angular/core';
@Component({
  selector:'etp',
  template:`

<br> <br> <h1> Second Form with ngForm </h1>
<form #f="ngForm" (ngSubmit)="submit(f)">
<div class="form-group">
<label for="fn1">First Name </label>
<input required ngModel name="fn1" #fn1="ngModel" (change)="display(fn1)" id="fn1" type="text" class="form-control">
<div class="alert alert-danger" *ngIf="fn1.touched && !fn1.valid"> First Name is required </div>
</div>

<div class="form-group">
<label for="ln1">Last Name </label>
<input required ngModel name="ln1" #ln1="ngModel" (change)="display(ln1)" id="ln1" type="text" class="form-control">
<div class="alert alert-danger" *ngIf="ln1.touched && !ln1.valid"> Last Name is required </div>
</div>


<button class="btn btn-primary">Save </button>
</form>

<br> <br> <h1> Third Form with ngModelGroup </h1>

<form #f1="ngForm" (ngSubmit)="submit1(f1)">
<div ngModelGroup="register">
<div class="form-group">
<label for="fn2">First Name </label>
<input required ngModel name="fn2" #fn2="ngModel" (change)="display(fn2)" id="fn2" type="text" class="form-control">
<div class="alert alert-danger" *ngIf="fn2.touched && !fn2.valid"> First Name is required </div>
</div>
</div>
<button class="btn btn-primary">Save </button>
</form>

<br><br><h1> Fourth Form (Submit Button) </h1>
<form #f2="ngForm" (ngSubmit)="submit2(f2)">
<div class="form-group">
<label for="fn3">First Name </label>
<input required ngModel name="fn3" #fn3="ngModel" (change)="display(fn3)" id="fn3" type="text" class="form-control">
<div class="alert alert-danger" *ngIf="fn3.touched && !fn3.valid"> First Name is required </div>
</div>

<div class="checkbox">
<label for="cb">
<input type="checkbox" ngModel name="isData" id="cb"> Save all these data
</label>
</div>
<p> {{f2.value | json }} </p>
<button class="btn btn-primary" [disabled]="!f2.valid">Save </button>




</form>

`
})
export class FormDirComponent
{
   submit(f) {console.log(f);}
    display(f) {console.log(f);}
    submit1(f1) {console.log(f1);}
    submit2(f2) {console.log(f2);}
    }
