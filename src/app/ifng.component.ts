
import { Component } from '@angular/core';
@Component ({

 selector: 'sif', //CSS Selector
 template: `

 <h2> Ng If </h2>

 <ul *ngFor ="let sam of same" [ngStyle]="{'color':'green'}" >
 <li *ngIf="sam.age>30">
{{sam.name}} {{sam.age}}</li>
 </ul>
 `
})
export class NifComponent{

 same: any[] = [
 {
 "name": "Ram",
 "age":"30",
 "country":"USA",
 },

 {
 "name": "Sam",
 "age":"33",
 "country":"Nepal",
 },

 {
 "name": "Sameer",
 "age":"34",
 "country":"Jalandhar",
 },

 {
 "name": "Arun",
 "age":"50",
 "country":"Amritsar",
 },


 ];

}
