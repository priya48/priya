import {Component} from '@angular/core';

@Component({

selector:'Ngm',
template:`<h1>{{students}}</h1>

<p>Enter password</p>
<input type="password"[(ngModel)]="myPass">
<ul *ngIf="myPass==='dotsway'">
<li *ngFor="let student of students">
Student:{{student}}
</li>
</ul>

`
})

export class NComponent
{

  students=['Dina','Shikaz','Dana'];
}
