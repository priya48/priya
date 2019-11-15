import { Component } from '@angular/core';
@Component ({

 selector: 'sign', //CSS Selector
 template: `

<form #f="ngForm" (ngSubmit)="submit(f)">
<div class="form-group">
<label for="fn">First name</label>
<input required ngModel name="fn" #fn="ngModel" (change)="display(fn)" id="fn" type="text"
class="form-control">
<div class="alert alert-danger" *ngIf="fn.touched && !fn.valid"> First Name is required </div>
</div>

<div class="form-group">
<label for="ln">Last name</label>
<input required minlength="3" maxlenght="10" pattern="singh"  ngModel name ="ln" #ln="ngModel"
(change)="display(ln)" id="ln" type="text" class="form-control">
<div class="alert alert-danger" *ngIf="ln.touched && !ln.valid">
<div *ngIf="ln.errors.required"> Last name is required </div>
<div *ngIf="ln.errors.minlength"> Last name should be minimum 3 character </div>
<div *ngIf="ln.errors.pattern">Dosn't match pattern </div>
</div>
</div>





<div class="form-group">
<button class="btn btn-primary"> Submit</button>
</div>
</form>
 `
})


 export class SignComponent {
   display(x) {console.log(x);}
   submit(f){console.log(f);}

 }
